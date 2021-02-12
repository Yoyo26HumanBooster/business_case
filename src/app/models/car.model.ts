export class Car {

    private _id: number;
    private _reference: string;
    private _description: string;
    private _price: string;
    private _registrationYear: number;
    private _mileage: number;
    private _fuel: string;
    private _model: string;
    private _brand: string;
    private _garage: number;
    private _photo: string;
    private _publishedAt: Date;
    private _updatedAt: Date;
    

    constructor(
      reference: string,
      description: string,
      price: string,
      registrationYear: number,
      mileage: number,
      garage: number,
      fuel: string,
      model: string,
      brand: string,
      photo: string,
      publishedAt: Date,
      updatedAt: Date,
      id?: number) {
        if (typeof id === 'number') {
        this._id = id;
        }
        this._reference = reference;
        this._description = description;
        this._price = price;
        this._registrationYear = registrationYear;
        this._mileage = mileage;
        this._garage = garage;
        this._fuel = fuel;
        this._model = model;
        this._brand = brand;
        this._photo = photo;
        this._publishedAt = publishedAt;
        this._updatedAt = updatedAt;
      }

      get id(): number {
        return this._id;
      }
    
      set id(value: number) {
        this._id = value;
      }

      get reference(): string {
        return this._reference;
      }
    
      set reference(value: string) {
        this._reference = value;
      }

      get description(): string {
        return this._description;
      }
    
      set description(value: string) {
        this._description = value;
      }

      get price(): string {
        return this._price;
      }
    
      set price(value: string) {
        this._price = value;
      }

      get registrationYear(): number {
        return this._registrationYear;
      }
    
      set registrationYear(value: number) {
        this._registrationYear = value;
      }

      get mileage(): number {
        return this._mileage;
      }
    
      set mileage(value: number) {
        this._mileage = value;
      }

      get garage(): number {
        return this._garage;
      }
    
      set garage(value: number) {
        this._garage = value;
      }

      get fuel(): string {
        return this._fuel;
      }
    
      set fuel(value: string) {
        this._fuel = value;
      }

      get model(): string {
        return this._model;
      }
    
      set model(value: string) {
        this._model = value;
      }

      get brand(): string {
        return this._brand;
      }
    
      set brand(value: string) {
        this._model = value;
      }

      get photo(): string {
        return this._photo;
      }
    
      set photo(value: string) {
        this._photo = value;
      }

      get publishedAt(): Date {
        return this._publishedAt;
      }
    
      set publishedAt(value: Date) {
        this._publishedAt = value;
      }

      get updatedAt(): Date {
        return this._updatedAt;
      }
    
      set updatedAt(value: Date) {
        this._updatedAt = value;
      }

      static fromJSON(data: any): Car {
        return new Car(
          data.reference,
          data.description,
          data.price,
          data.registration_year,
          data.mileage,
          data.garage,
          data.fuel,
          data.model,
          data.photo,
          data.published_at,
          data.updated_at,
          data.id);
      }
    
      static toJSON(car: Car): any {
        return {
          id: car.id,
          reference: car.reference,
          description: car.description,
          registrationYear: car.registrationYear,
          mileage: car.mileage,
          garage: car.garage,
          fuel: car.fuel,
          model: car.model,
          photo: car.photo,
          publishedAt: car.publishedAt,
          updatedAt: car.updatedAt,

        };
      }



}