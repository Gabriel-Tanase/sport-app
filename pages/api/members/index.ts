import { NextApiResponse } from "next";
import { isEmpty } from "lodash";
import nextConnect from "next-connect";
import prisma from "../../../prisma/prisma";
import { authorization } from "../middleware";
import { NextApiRequestAuthorized } from "../../../shared/shared.interface";

const GetUsers = nextConnect({
  onError(error, req: NextApiRequestAuthorized, res: NextApiResponse) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req: NextApiRequestAuthorized, res: NextApiResponse) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

GetUsers.get(async (req: NextApiRequestAuthorized, res: NextApiResponse) => {
  const users = await prisma.user.findMany({
    where: {
      isTrainer: req.query.trainersOnly === "true",
    },
    include: {
      profile: {
        include: {
          gallery: true,
          plans: true,
          events: true,
          education: true,
          workExperience: true
        }
      }
    }
  });

  if (!isEmpty(users)) {
    return res.status(200).send({
      message: `Successfully grab ${
        Boolean(req.query.trainersOnly) ? "trainers" : "memebers"
      } list`,
      users: users,
    });
  } else {
    return res.status(200).send({
      message: "Can't find any users.",
      users: [],
    });
  }
});

export default authorization(GetUsers);
