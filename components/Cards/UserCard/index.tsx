import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { UserCardProps } from "./index.interface";
import { useTranslation } from "../../../shared/hooks/useTranslation";
import { useRouter } from "next/router";
import { Paths } from "../../../shared/paths.const";

const UserCard: React.FC<UserCardProps> = ({
  id,
  avatarUrl,
  firstName,
  lastName,
  testimonial,
  sports,
}) => {
  const { translate } = useTranslation();
  const router = useRouter();

  const onClickCard = () => router.push(`${Paths.Profile.path}/${id}`);

  const onClickContactUser = () => alert("Contact user from Trainers");

  const renderSports = (sportsList) =>
    sportsList.map((sport, index) => (
      <Typography key={index} variant="body1" color="text.primary">
        {sport}
      </Typography>
    ));

  return (
    <Card sx={{ maxWidth: 345 }} className="m-2 w-full" onClick={onClickCard}>
      <CardActionArea>
        <CardMedia
          className="aspect-9/16 h-80"
          component={"img"}
          src={avatarUrl}
          alt={`${lastName} ${firstName} avatar image`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {`${lastName} ${firstName}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {testimonial}
          </Typography>
          {renderSports(sports)}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={onClickContactUser}>
          {translate.contactButton}
        </Button>
      </CardActions>
    </Card>
  );
};

export default UserCard;
