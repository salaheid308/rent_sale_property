import { Iproperty } from "./iproperty";
import { Photo } from "./photo";

export class Property implements Iproperty {
  Gated: number;
  Security: number;
  Id: number;
  SellRent: number;
  Name: string;
  PType: string;
  FType: string;
  Price: number;
  BHK: number;
  BuiltArea: number;
  City: string;
  readyToMove: boolean;
  Image?: string;
  Address : string;
  Address2: string;
  PostedOn? : string;
    propertyTypeId: number;
    furnishingTypeId: number;
    carpetArea?: number;
    address: string;
    address2?: string;
    CityId: number;
    FloorNo : string;
    TotalFloor : string;
    AOP?: number;
    MainEntrance: string;
    security?: number;
    gated?: boolean;
    Mainentrance: number;
    photo?: string;
    description?: string;
    photos?: Photo[];
    poston : string;
    Description :string;
}
