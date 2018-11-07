import { NgModule } from '@angular/core';
import { TrimHtmlPipe } from './trim-html.pipe';
import { TruncatePipe } from './truncate.pipe';
import { SortPipe } from './sort/sort';

@NgModule({
	declarations: [
		TruncatePipe,
		TrimHtmlPipe,
    SortPipe
	],
	exports: [
		TruncatePipe,
		TrimHtmlPipe,
    SortPipe
	]
})
export class PipesModule {

}
