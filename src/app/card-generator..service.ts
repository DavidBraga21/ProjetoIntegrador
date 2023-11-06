import { Injectable } from '@angular/core';
import { createConnection, Connection } from 'mysql2/promise';

@Injectable({
  providedIn: 'root'
})
export class CardGeneratorService {
  private connection: Connection | null = null;

  constructor() {
    this.initializeConnection();
  }

  async initializeConnection() {
    this.connection = await createConnection({
      host: 'localhost', // endereço do servidor MySQL
      user: 'root',
      password: '',
      database: 'mesafacil'
    });
  }

  async getDadosDoBanco(): Promise<any> {
    if (this.connection) {
      const [rows] = await this.connection.execute('SELECT * FROM tabela');
      return rows;
    } else {
      return [];
    }
  }
}