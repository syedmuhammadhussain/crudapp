
import { Observable } from 'rxjs';
import { MessagesComponent } from './messages.component';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  dialogRef: MatDialogRef<MessagesComponent>;

  constructor(private dialog: MatDialog) { }

  public openDialog(title: string, message: string): Observable<any> {
    this.dialogRef = this.dialog.open(MessagesComponent);
    this.dialogRef.componentInstance.title = title;
    this.dialogRef.componentInstance.message = message;

    return this.dialogRef.afterClosed();

  }
  
}
