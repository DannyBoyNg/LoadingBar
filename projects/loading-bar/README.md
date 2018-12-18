# LoadingBar

An Angular library to display a loading bar to indicate that the app is busy

## Dependancies

@angular/cdk >=6.0.0  
@angular/material >=6.0.0  

## Installing

Install from NPM

```bash
npm install @dannyboyng/loading-bar
```

## Usage

Import module
```typescript
import { LoadingBarModule } from '@dannyboyng/loading-bar';
...
@NgModule({
  imports: [
    LoadingBarModule,
  ],
```
Basic
```html
<dbn-loading-bar></dbn-loading-bar>
```
```typescript
constructor(private loadingBar: LoadingBarService) {}

show() {
  this.loadingBar.show();
}

hide() {
  this.loadingBar.hide();
}

resetAll() {
  this.loadingBar.resetAll();
}
```

Named loading bars

```html
<dbn-loading-bar [id]="myNamedLoadingBar"></dbn-loading-bar>
```
```typescript
show() {
  this.loadingBar.show("myNamedLoadingBar");
}

hide() {
  this.loadingBar.hide("myNamedLoadingBar");
}
```

Practical usage
(Show loading bar before ajax call and hide loading bar when ajax call completes. The loading bar will only disappear when all ajax calls complete.)

```typescript
this.loadingBar.show();
this.api.getDataFromServer()
.pipe(
  finalize(() => this.loadingBar.hide()),
);
```

Change color of loading bar  
add the following to the global styles.css

```css
.mat-progress-bar-fill::after {
    background-color: green !important;
}
```

## License

This project is licensed under the MIT License.

## Contributions

Contributions are welcome.
