import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function MUICard({item}) {
    // const keys = Object.keys(item)
    // console.log(keys);
  return (
    <Card sx={{ m:5, maxWidth: 600,  bgcolor: '#3399FF'}} >
      <CardContent>
        <Typography variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {item.link}
        </Typography>
        <Typography variant="body2">
          views: {item.views}
        </Typography>
        <Typography variant="body2">
          likes: {item.likes}
        </Typography>
        <Typography variant="body2">
          dislikes: {item.dislikes}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}