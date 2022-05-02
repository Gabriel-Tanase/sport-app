import React, { useState } from "react";
import { icon } from "../../../shared/icons";
import { SportType } from "../../../shared/shared.enum";
import DefaultCard from "../../Cards/DefaultCard";
import { EducationLabelType } from "../../Cards/index.enum";
import PlanCard from "../../Cards/PlanCard";
import EventCard from "../../Cards/EventCard";
import SectionDivider from "../../SectionDivider";
import Warning from "../../Waning";
// import { useDispatch } from "react-redux";
// import { setBadgeNotification } from "../../../redux/slices/badgeNotification.slice";
import { ProfileBodyProps } from "../Profile.interface";
import { SectionType } from "../sections.enum";
import isEmpty from "lodash/isEmpty";
import { useTranslation } from "../../../shared/hooks/useTranslation";
import { Education } from "../../../schemas/education";
import { WorkExperience } from "../../../schemas/workexperience";
import { Modal } from "../../Modal";

const { IoSchoolSharp, MdOutlineModeEditOutline } = icon;

const initialModalConfig = {
  display: false,
};

const ProfileBody: React.FC<ProfileBodyProps> = ({ currentUser, isOwner }) => {
  const [modalConfig, setModalConfig] = useState(initialModalConfig);
  const { translate } = useTranslation();

  const { profile } = currentUser;
  console.log(currentUser);

  const renderSportLabels = (sports: string[]) => {
    if (isEmpty(sports)) {
      return (
        <Warning size={22} infoMessage={translate.warningSpecialization} />
      );
    }
    return sports.map((item: string, index: number) => (
      <p
        key={index}
        className="bg-lightBackground dark:bg-darkSecondaryBackground rounded-md px-1.5 py-1 mx-1 text-xxs font-germania tracking-wider"
      >
        {SportType[item]}
      </p>
    ));
  };

  const renderEducationCards = (educations: Education[]) => {
    if (isEmpty(educations)) {
      return <Warning size={22} infoMessage={translate.warningEducation} />;
    }
    return educations.map((item: Education) => (
      <DefaultCard
        key={item.id}
        icon={IoSchoolSharp}
        headline={item.institution}
        description={item.specialization}
        label={EducationLabelType[item.label]}
      />
    ));
  };

  const renderWorkCards = (experiences: WorkExperience[]) => {
    if (isEmpty(experiences)) {
      return <Warning size={22} infoMessage={translate.warningWork} />;
    }
    return experiences.map((item: WorkExperience) => (
      <DefaultCard
        key={item.id}
        icon={IoSchoolSharp}
        headline={item.company}
        description={item.position}
      />
    ));
  };

  const onClickEditSpecialization = () => {
    setModalConfig({
      display: true,
    });
  };

  const onClickCloseModal = () => {
    setModalConfig(initialModalConfig);
  };

  return (
    <div className="py-2 bg-red-10">
      <div className="px-2 mb-2">
        <span>
          <h1 className=" text-2xl">
            {currentUser?.firstName} {currentUser?.lastName}
          </h1>
        </span>
        <p className="text-xxs text-disabled dark:text-darkDisabled">
          SOON: Premium users can add email, phone and social platforms in
          profile info. + premium badge ( ! )
        </p>
        <div className="text-sm">
          {
            <div className="flex items-center relative">
              <p className="text-disabled dark:text-darkDisabled mr-2">
                {profile?.sports.length > 1
                  ? translate.specialization
                  : translate.specializations}
              </p>
              {renderSportLabels(profile?.sports)}
              <button
                onClick={onClickEditSpecialization}
                className="backgroundColor shadow-md rounded-full p-1 ml-3 transition-all hover:scale-105 text-black dark:text-white border border-disabled dark:border-darkDisabled"
              >
                <MdOutlineModeEditOutline size={14} />
              </button>
            </div>
          }
        </div>
      </div>
      <SectionDivider
        displayEditButton={isOwner}
        sectionName={SectionType.INTRODUCTION}
      />
      <div>
        <p className="text-xxs text-disabled dark:text-darkDisabled ml-2">
          SOON: Video description
        </p>
        {isEmpty(profile.introduction) ? (
          <Warning size={22} infoMessage={translate.warningEducation} />
        ) : (
          <p className="p-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book
          </p>
        )}
      </div>
      <SectionDivider
        displayEditButton={isOwner}
        sectionName={SectionType.EDUCATION}
      />
      {renderEducationCards(profile?.education)}
      <SectionDivider
        displayEditButton={isOwner}
        sectionName={SectionType.WORK}
      />
      {renderWorkCards(profile?.workExperience)}
      <SectionDivider
        displayEditButton={isOwner}
        sectionName={SectionType.ACTIVITY}
      />
      <div className="ml-1">
        {/* currentUser.profile.trainingInteraction */}
        <div>
          <p>Training interaction:</p>
          <span className="ml-1">1v1 and online</span>
        </div>
        {/* currentUser.profile.trainingLocations */}
        <div>
          <p>Where we can do the training:</p>
          <span className="ml-1">WorldClass Downtown</span>,
          <span className="ml-1">Downtown Fitness</span>
        </div>
      </div>
      <SectionDivider
        displayEditButton={isOwner}
        sectionName={SectionType.GALLERY}
      />
      {/* currentUser.profile.gallery.images */}
      {/* image carousel */}
      <p>image carousel</p>
      <SectionDivider
        displayEditButton={isOwner}
        sectionName={SectionType.PLAN}
      />
      {/* currentUser.plans */}
      <div className="flex">
        <PlanCard />
        <PlanCard />
        <PlanCard />
      </div>
      <SectionDivider
        displayEditButton={isOwner}
        sectionName={SectionType.EVENTS}
      />
      <div className="flex">
        <EventCard />
        <EventCard />
      </div>
      {modalConfig.display && (
        <Modal onClickClose={onClickCloseModal}>
          <p>Lorem ipsum</p>
        </Modal>
      )}
    </div>
  );
};

export default ProfileBody;
