import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  config = {
    ApiUrlService: 'http://0.0.0.0:8004/',
    apiUrl: 'http://0.0.0.0/',
    projectName: 'Directorio Mexicano de Investigadores',
    projectAcronym: 'DMI'
  };

  constructor() { }

  getConfig() {
    return this.config;
  }

  getApiUrl() {
    return this.config.apiUrl;
  }
  getApiUrlService() {
    return this.config.ApiUrlService;
  }
  getProjectName() {
    return this.config.projectName;
  }

  getProjectAcronym() {
    return this.config.projectAcronym;
  }

}
