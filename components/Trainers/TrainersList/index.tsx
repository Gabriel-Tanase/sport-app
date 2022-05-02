import React from "react";
import { TrainersList } from "../index.interface";
import { User } from "../../../shared/shared.interface";
import UserCard from "../../Cards/UserCard/index";

const TrainersList: React.FC<TrainersList> = ({ trainers }) => {
  const renderTrainersList = () =>
    trainers.map((trainer: User) => (
      <UserCard
        id={trainer.id}
        key={trainer.id}
        firstName={trainer.firstName}
        lastName={trainer.lastName}
        avatarUrl={trainer.avatar}
        testimonial={"Lorem ipsum dolor sit amet it"}
        sports={trainer.profile.sports}
      />
    ));

  return (
    <div>
      <div>search + filter + sort</div>
      <div className="flex flex-wrap justify-center">
        {renderTrainersList()}
      </div>
    </div>
  );
};

export default TrainersList;
