import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {SupabaseService} from "@shared/services/supabase.service";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  loading = false;
  signInForm = this.formBuilder.group({
    password: ''
  })

  constructor(
    private readonly supabase: SupabaseService,
    private readonly formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
  }

  async updatePassword(): Promise<void> {
    this.loading = true
    const password = this.signInForm.value.password as string;
    this.supabase.updatePassword(password).then(data => console.log(data));
  }
}
