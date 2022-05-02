import { NextApiResponse } from "next";
import { isEmpty } from "lodash";
import nextConnect from "next-connect";
import prisma from "../../prisma/prisma";
import { authorization } from "./middleware";

import { NextApiRequestAuthorized } from "../../shared/shared.interface";

const GetProfile = nextConnect({
  onError(error, req: NextApiRequestAuthorized, res: NextApiResponse) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req: NextApiRequestAuthorized, res: NextApiResponse) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

GetProfile.get(
  async (req: NextApiRequestAuthorized, res: NextApiResponse) => {
     const profile = await prisma.profile.findUnique({
      where: {
        id: req.query.id,
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

    if (!isEmpty(profile)) {
      return res.status(200).send(profile);
    } else {
      return res.status(200).send({
        message: "Can't find the profile.",
      });
    }
  }
);

export default authorization(GetProfile);
