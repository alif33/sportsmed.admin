import nc from "next-connect";
import Watch from "../../../models/Watch";
import { isAdmin, isAuth } from "../../../utils/auth";
import db from "../../../utils/db";

const handler = nc();

// handler.use(isAuth);

handler.use(isAdmin).post(async (req, res) => {
  const { title, league, videoId, description } = req.body;

  await db.connect();

  const watch = new Watch({
    title,
    league,
    videoId,
    description,
  });

  if (await watch.save()) {
    await db.disconnect();
    res.send({
      success: true,
      message: "Video added in watch list",
    });
  } else {
    await db.disconnect();
    res.send({
      error: "Server side error",
    });
  }
});

handler.delete(async (req, res) => {
  if (req.query?._id) {
    await db.connect();

    const watch = Watch.findById({ _id: req.query._id });
    if (watch) {
      await watch.remove();
      await db.disconnect();
      res.send({
        success: true,
        message: "Video removed successfully.",
      });
    } else {
      await db.disconnect();
      res.send({
        error: "Video not found",
      });
    }
  }
});

export default handler;
