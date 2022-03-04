import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Menu, MenuItem } from '@mui/material';
import { IPost } from '../../types/post';
import _, { get } from 'lodash'
import { timeFromNow } from '../../utils/helper';

const ItemPost: React.FC<{ post: IPost }> = ({ post = [] }) => {
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
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>

      <Card className="item-post">
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} src={get(post, 'owner.picture')} aria-label="recipe">
            </Avatar>
          }
          action={
            <IconButton aria-label="settings" onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
          }
          title={get(post, 'owner.firstName') + " " + get(post, 'owner.lastName')}
          subheader={timeFromNow(get(post, 'publishDate'))}
        />
        {
          !_.isEmpty(get(post, 'image')) && (
            <CardMedia
              component="img"
              height="auto"
              image={get(post, 'image')}
              alt="Paella dish"
            />
          )
        }

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {get(post, 'text')}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <span>390</span>
        </CardActions>
      </Card>
    </div>
  );
}

export default ItemPost