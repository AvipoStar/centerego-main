import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { $DataUser, setDataUser, setaccessToken, setrefreshToken } from "../../../common/axio/axiosInstance2";
import React from "react";
import { useStore } from "effector-react";
import "../styles/LKDropDown.css"

export interface ILKForm {
  requestRef?: any;
  setShowLK: React.Dispatch<React.SetStateAction<boolean>>;
  showLK: boolean;
}
const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{vertical: 'bottom',horizontal: 'right',}}
    transformOrigin={{ vertical: 'top', horizontal: 'right',}}
    
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 10,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.mode === 'light' ? '#5d1c5f' : theme.palette.grey[300],
    boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': { padding: '4px 0'},
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export const DropDown = (params: ILKForm) => 
{
  const dataUser = useStore($DataUser)

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => 
  {
    setAnchorEl(event.currentTarget);
  };
  const handleOpen = () => 
  {
    setAnchorEl(null);
    params.setShowLK(!params.showLK);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // выход из аккаунта
  const handleExit = ()=>
  {
    setAnchorEl(null);
    setDataUser(null)
    setaccessToken("")
    setrefreshToken("")
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("emailOrPhone");
  }

  return (
    <div className='.Drop'>
      <Button
        id="basic-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
         sx={{color: '#5d1c5f'}}
      >
        <PersonOutlineIcon/>
        {localStorage.getItem("emailOrPhone")?.length !== 0 ? localStorage.getItem("emailOrPhone"):dataUser?.emailOrPhone}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{'aria-labelledby': 'basic-button',}}
      >
        <MenuItem onClick= {handleOpen}>
          История заявок
        </MenuItem>
        <MenuItem onClick={handleExit} disableRipple
        sx={{color: '#FA0000'}}>
          Выход
        </MenuItem>
        
      </Menu>
    </div>
  );
}