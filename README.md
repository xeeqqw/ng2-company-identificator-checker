# Company Identificator Checker

Набор директив для проверки валидности введённых значений ИНН и ОГРН.

## Использование

Внутри своего проекта выполните команду:

```
npm install ng2-company-identificator-checker
```

Если вы используете __SystemJS__, то обновите файл `systemjs.config.ts` следующим образом:

```typescript
const map: any = {
    //Другие библиотеки
    'ng2-company-identificator-checker': 'node_modules/ng2-company-identificator-checker'
};

const packages: any = {
    //Другие библиотеки
    'ng2-company-identificator-checker': { main: 'index.js', defaultExtension: 'js' }
};

//Другие конфигурации...

System.config({ map, packages });
```

Затем импортируйте модуль `CompanyIdChecherModule` внутри своего модуля. Пример:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CompanyIdChecherModule } from 'ng2-company-identificator-checker/index'
import { AppComponent } from './components/app/app.component'

@NgModule({
    imports: [BrowserModule, CompanyIdChecherModule],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
```

Пример использования в HTML шаблоне компонента (используются Bootstrap'овские стили):

```html
<fieldset class="form-group">
    <label for="innField" class="form-control-label">ИНН</label>
    <input type="text" [(ngModel)]="model.INN" name="innField" #innField="ngModel" class="form-control" inn-validator required />
    <div *ngIf="innField.errors && !innField.pristine">
        <small [hidden]="!innField.errors.required" class="error-message">Данное поле обязательно для заполнения</small>
        <small [hidden]="!innField.errors.validateINN || innField.pristine" class="error-message">
            Некорректный ИНН
        </small>
    </div>
</fieldset>
```

## Доступные директивы

| Название директивы | описание | 
| ------------- |:-------------:|
| inn-validator | Валидация ИНН |
| ogrn-validator | Валидация ОГРН |