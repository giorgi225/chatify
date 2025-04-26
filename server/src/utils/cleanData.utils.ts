import { UUID } from "crypto";
import { user } from "../../generated/prisma";
import { UserType } from "../types/types";

class CleanResponseData {
    user(user: user): UserType {
        const { id, firstname, lastname, email, profilePic } = user;
        return {
            id: id as UUID,
            firstname,
            lastname,
            email,
            profilePic
        }
    }
}

const cleanData = new CleanResponseData;
export default cleanData;