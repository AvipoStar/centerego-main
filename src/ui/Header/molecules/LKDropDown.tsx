import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { $DataUser } from "../../../common/axio/axiosInstance2";
import React from "react";
import { useStore } from "effector-react";
import "../styles/LKDropDown.css"

export interface ILKForm {
  requestRef: any;
  setShowLK: React.Dispatch<React.SetStateAction<boolean>>;
  showLK: boolean;
}
const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
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

export const DropDown = (params: ILKForm | any) => 
{
  const dataUser = useStore($DataUser)

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        <PersonOutlineIcon/>
        {dataUser?.emailOrPhone}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{'aria-labelledby': 'demo-customized-button'}}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick= {() => {handleClick(), params.setShowLK(!params.showLK)}} disableRipple>
          История заявок
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          Выход
        </MenuItem>
        
      </StyledMenu>
    </div>
  );
}

// export const DropDown =(params: ILKForm | any) =>{
//   const dataUser = useStore($DataUser)

//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
  
//   const ShowAppHist = ()=>
//   {
//     console.log('open history')
//   }
   
//   return (
//   <div className="Drop">
//     <button className="Button" onClick= {() => {handleClick(), params.setShowLK(!params.showLK)}}>
//       {dataUser?.emailOrPhone}
//     </button>
//     <Menu id="basic-menu"
//       anchorEl={anchorEl}
//       open={open}
//       onClose={handleClose}
//       MenuListProps={{'aria-labelledby': 'basic-button'}}
//     >
//       <MenuItem onClick={ShowAppHist}>История заявок</MenuItem>
//       <MenuItem onClick={handleClose}>Выход</MenuItem>
//     </Menu>
//   </div>
//   );
// }