//Import modules
import Local from "passport-local";
import bcrypt from "bcrypt";

const initialize = (passport, getUserByEmail, getUserById) => {
    const authenticateUser = async (email, password, done) => {
        const user = getUserByEmail(email);
        if (user === null) {
            return done(null, false, {
                message: "Aucun utilisateur avec cette email",
            });
        }
        try {
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user);
            } else {
                return done(null, false, { message: "Mot de passe incorrect" });
            }
        } catch (error) {
            return done(error);
        }
    };

    passport.use(new Local.Strategy({usernameField: "email"}, authenticateUser));
    passport.serializeUser((user, done) => done(null, user.id));
    passport.deserializeUser((id, done) => {
        return done(null, getUserById(id));
    });
};

export default initialize;