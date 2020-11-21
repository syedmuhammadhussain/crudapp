import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './../services/http.service';
import { MemberModal } from './member.modal';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-crudapp',
  templateUrl: './crudapp.component.html',
  styleUrls: ['./crudapp.component.css']
})
export class CrudappComponent implements OnInit {

  dialogRef: MatDialogRef<any>;

  // -------------- Form Builder -----------------
  // Add List
  formList = this.fb.group({
    userId: ['', Validators.required],
    title: ['', Validators.required],
    body: ['', Validators.required],
  });

  // Edit List
  editList = this.fb.group({
    userId: ['', Validators.required],
    title: ['', Validators.required],
    body: ['', Validators.required],
  })

  // Edit Input Data
  uid: string;
  utitle: string;
  ubody: string;

  // spinner
  isLoadingResults = true;
  isRateLimitReached = false;

  // api url
  private url = 'https://jsonplaceholder.typicode.com/posts';

  public addList: FormGroup;

  // variable for loop
  dataList: any;
  updatePost;
  index;

  // table header
  displayedColumns: string[] = ['ID', 'UserID', 'Title', 'Body', 'Action'];

  // table body 
  dataSource: MatTableDataSource<MemberModal>;

  // paginator and sorting
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('csform') form: any;
  @ViewChild('cseditform') formEdit: any;

  constructor(
    private http: HttpClient,
    private httpService: HttpService,
    private changeDetectorRefs: ChangeDetectorRef,
    public dialog: MatDialog,
    private fb: FormBuilder
  ) {

  }

  ngOnInit(): void {

    // --------------- GET All Records -----------------
    this.httpService.getPost()
      .subscribe((response) => {
        this.dataList = response;
        this.dataSource = new MatTableDataSource(this.dataList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, error => {
        alert('An unexpected error occurred.');
        console.log(error);
      })

    // Tesing 
    // this.httpService.Testing()
    //   .subscribe(data => console.log(typeof data));
  }

  // -------------- ADD Record ----------------

  createList() {
    let post = this.formList.value;

    this.httpService.createPost('https://jsonplaceholder.typicode.com/postsaaa', post)
      .subscribe((data) => {
        post['id'] = data['id'];
        this.dataList.splice(0, 0, post);
        this.dataSource = new MatTableDataSource(this.dataList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.form.resetForm({});
        $('span[data-dismiss="modal"]').click();
      },
        error => {
          alert('P An unexpected error occurred.');
          console.log(error);
        })
  }

  // -------------- UPDATE Record ----------------

  updateGetRecordByID(post) {
    this.updatePost = post;
    this.uid = post.userId;
    this.utitle = post.title;
    this.ubody = post.body;
  }

  updateRecord() {
    // get form value
    let post = this.editList.value;

    this.httpService.updatePost(this.updatePost.id, post)
      .subscribe(data => {
        let index = this.dataList.indexOf(this.updatePost);
        this.dataList[index] = data;
        this.dataSource = new MatTableDataSource(this.dataList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.formEdit.resetForm({});
        $('span[data-dismiss="modal"]').click();
      });
  }

  // -------------- DELETE Record --------------

  deletePost1(post) {
    // this.dialog.open(DeleteDialog);
    // this.httpService.deletePost(345)
    //   .subscribe(
    //     response => {
    //       debugger;
    //       let index = this.dataList.indexOf(post);
    //       this.dataList.splice(index, 1);
    //       // this.dataSource = new MatTableDataSource(this.dataList);
    //       // this.dataSource.paginator = this.paginator;
    //       // this.dataSource.sort = this.sort;
    //       // this.dialog.closeAll();
    //     },
    //     (error: Response) => {
    //       debugger;
    //       if (error.status === 404)
    //         alert('This post has already been deleted.');
    //       else {
    //         alert('An unexpected error occurred.');
    //         console.log(error);
    //       }
    //     });
  }

  // deletePost() {
  //   this.httpService.deletePost('https://jsonplaceholder.typicode.com/postsaaa/345')
  //     .subscribe(data => {
  //       console.log(data)
  //     }, error => {
  //       debugger;
  //       alert('An unexpected error occurred.');
  //       console.log(error);
  //     });
  // }

  // ----------------- Fitler ------------------

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

@Component({
  selector: 'delete-dialog',
  templateUrl: 'delete-dialog.html',
})
export class DeleteDialog { }
