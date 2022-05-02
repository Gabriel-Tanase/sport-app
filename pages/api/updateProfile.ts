import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import prisma from "../../prisma/prisma";

import { authorization } from "./middleware";
import { NextApiRequestAuthorized } from "../../shared/shared.interface";

const UpdateProfile = nextConnect({
  onError(error, req: NextApiRequest, res: NextApiResponse) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req: NextApiRequest, res: NextApiResponse) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

UpdateProfile.post(
  async (req: NextApiRequestAuthorized, res: NextApiResponse) => {
    await prisma.profile
      .update({
        where: { id: req.decoded.id },
        data: req.body,
      })
      .then((response) => {
        return res.status(200).json({
          user: response,
          message: "User update successfully.",
        });
      })
      .catch((err) => {
        return res.status(500).json({
          message: err,
        });
      });
  }
);

export default authorization(UpdateProfile);
