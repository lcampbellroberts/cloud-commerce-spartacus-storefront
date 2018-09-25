import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { combineReducers, StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { StoreFinderPageLayoutComponent } from './store-finder-page-layout.component';
import { StoreFinderPagingComponent } from '../../../store-finder/components/store-finder-paging/store-finder-paging.component';
import { StoreFinderListComponent } from '../../../store-finder/components/store-finder-list/store-finder-list.component';
import { StoreFinderSearchComponent } from '../../../store-finder/components/store-finder-search/store-finder-search.component';
import { StoreFinderListCountComponent } from '../../../store-finder/components/store-finder-list-count/store-finder-list-count.component';
import { StoreFinderMapComponent } from '../../../store-finder/components/store-finder-map/store-finder-map.component';
import { services } from '../../../store-finder/services';
import { OccE2eConfigurationService } from '../../../occ/e2e/e2e-configuration-service';

import { OccModuleConfig } from '../../../occ/occ-module-config';
import * as fromCmsReducer from '../../../cms/store/reducers';
import * as fromStore from '../../../store-finder/store';
import * as fromRoot from '../../../routing/store';

// tslint:disable-next-line:max-line-length
import { StoreFinderListItemComponent } from '../../../store-finder/components/store-finder-list/store-finder-list-item/store-finder-list-item.component';

describe('StoreFinderPageLayoutComponent', () => {
  let component: StoreFinderPageLayoutComponent;
  let fixture: ComponentFixture<StoreFinderPageLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        CommonModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
        StoreModule.forRoot({
          ...fromRoot.getReducers(),
          stores: combineReducers(fromStore.reducers),
          cms: combineReducers(fromCmsReducer.getReducers())
        })
      ],
      declarations: [
        StoreFinderPageLayoutComponent,
        StoreFinderPagingComponent,
        StoreFinderListItemComponent,
        StoreFinderListComponent,
        StoreFinderSearchComponent,
        StoreFinderMapComponent,
        StoreFinderListCountComponent
      ],
      providers: [...services, OccE2eConfigurationService, OccModuleConfig]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreFinderPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
