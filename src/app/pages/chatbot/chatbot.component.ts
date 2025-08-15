import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}
@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    NgClass,
    TranslatePipe
  ],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.scss'
})

export class ChatbotComponent {
  isActive = false;
  isStarted = false;
  messages: Message[] = [];
  messageText = '';
  onInputChange(event: any) {
    this.messageText = event.target.value;
    this.isActive = this.messageText.trim().length > 0;
  }

  sendMessage() {
    if (!this.isActive) return;

    // Chat start bo‘ldi
    if (!this.isStarted) {
      this.isStarted = true;
    }

    // User xabarini qo‘shish
    this.messages.push({
      text: this.messageText.trim(),
      sender: 'user',

    });

    // Inputni bo‘shatish
    this.messageText = '';
    this.isActive = false;

    // Bot javobi
    setTimeout(() => {
      this.messages.push({
        text: 'Привет! Чем могу помочь?',
        sender: 'bot',

      });
    }, 500);
  }
}

