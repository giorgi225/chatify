import { UUID } from "crypto";
import { Request } from "express";
import { Socket } from "socket.io";

export type AuthorizedRequest = Request & { userId: string };
export type AuthorizedSocketRequest = Socket & {
    user?: UserType
}


export type UserType = {
    id: UUID,
    firstname: string,
    lastname: string,
    email: string,
}

type Unit =
    | "Years"
    | "Year"
    | "Yrs"
    | "Yr"
    | "Y"
    | "Weeks"
    | "Week"
    | "W"
    | "Days"
    | "Day"
    | "D"
    | "Hours"
    | "Hour"
    | "Hrs"
    | "Hr"
    | "H"
    | "Minutes"
    | "Minute"
    | "Mins"
    | "Min"
    | "M"
    | "Seconds"
    | "Second"
    | "Secs"
    | "Sec"
    | "s"
    | "Milliseconds"
    | "Millisecond"
    | "Msecs"
    | "Msec"
    | "Ms";

type UnitAnyCase = Unit | Uppercase<Unit> | Lowercase<Unit>;

export type StringValue =
    | `${number}`
    | `${number}${UnitAnyCase}`
    | `${number} ${UnitAnyCase}`;