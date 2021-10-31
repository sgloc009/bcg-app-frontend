import { Vehicle } from "./vehicle";

export interface Customer {
    gender: String, 
    id: Number, 
    income_group: String,
    marital_status: Boolean,
    region: String, 
    vehicle: Array<Vehicle>
}
