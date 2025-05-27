import Employee from "./employee";
import { EventType } from "./enum/eventType";

export default class EmployeeHistory{
  private event!: EventType; // Promoção , Transferêmcia 
  private eventDate! : Date;
  private employeeH:Employee[] = [];

  public constructor(event: EventType, eventDate: Date) {
    this.event = event;
    this.eventDate = eventDate;
  }
    
  // Getters
  public getEvent(): EventType { return this.event; }
  public getEventDate(): string { return this.eventDate.toLocaleDateString('pt-BR'); }
    
  // Setters
  public setEvent(event: EventType): void { this.event = event; }
  public setEventDate(eventDate: Date): void { this.eventDate = eventDate; }

  public pushHistory(employee:Employee) : void{
    this.employeeH.push(employee);
  }

  public displayData():string{
    if (!this.event){
      return 'Sem eventos'
    }
    return ` Evento: ${this.event}\n Data do evento: ${this.eventDate.toLocaleDateString(`pt-BR`)} `;
  } 


}