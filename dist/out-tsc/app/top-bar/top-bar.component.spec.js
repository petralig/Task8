import { async, TestBed } from '@angular/core/testing';
import { TopBarComponent } from './top-bar.component';
describe('TopBarComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TopBarComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TopBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/ilkkamtk/Desktop/Week4l7/src/app/top-bar/top-bar.component.spec.js.map