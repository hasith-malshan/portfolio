import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard({ cardData }) {
  return (
    <Card sx={{ width: 350, height: 350, maxWidth: 350 }}>
      <CardActionArea>
        <CardMedia
          sx={{ objectFit: 'contain' }}
          component="img"
          height="140"
          image="https://miro.medium.com/v2/resize:fit:720/format:webp/1*L5QyrMNalM3yhtgdgBcvkQ.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textAlign: 'center', height: 60 }}
          >
            {cardData.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontWeight: 900, textAlign: 'center' }}
          >
            {cardData.maintech.join(', ')}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
