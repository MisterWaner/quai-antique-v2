//import modules
import passport from "passport";
import passportJwt from "passport-jwt";
import db from "../config/sequelize-config.js";
import { config } from "dotenv";
config();

const ExtractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;

passport.use(
    new StrategyJwt(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET,
        },

        async (jwtPayload, done) => {
            const user = await db.User.findOne({
                where: { id: jwtPayload.id },
            });
            if (!user) {
                return done(null, false);
            }

            return done(null, user);
        }
    )
);
