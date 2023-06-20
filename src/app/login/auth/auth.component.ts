import { Component } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import {SupabaseService} from "@shared/services/supabase.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})

export class AuthComponent {
  loading = false

  signInForm = this.formBuilder.group({
    email: '',
    password: ''
  })

  constructor(
    private readonly supabase: SupabaseService,
    private readonly formBuilder: FormBuilder
  ) {}

  async onSubmit(): Promise<void> {
    try {
      this.loading = true
      const email = this.signInForm.value.email as string;
      const password = this.signInForm.value.password as string;
      console.log(email);
      console.log(password);
      const response = await this.supabase.signInWithEmail(email, password);
      if (response) throw Error
        alert('Check your email for the login link!')
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      this.signInForm.reset()
      this.loading = false
    }
  }
}
