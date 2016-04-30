'use strict';"use strict";
/**
 * Defines template and style encapsulation options available for Component's {@link View}.
 *
 * See {@link ViewMetadata#encapsulation}.
 */
(function (ViewEncapsulation) {
    /**
     * Emulate `Native` scoping of styles by adding an attribute containing surrogate id to the Host
     * Element and pre-processing the style rules provided via
     * {@link ViewMetadata#styles} or {@link ViewMetadata#stylesUrls}, and adding the new Host Element
     * attribute to all selectors.
     *
     * This is the default option.
     */
    ViewEncapsulation[ViewEncapsulation["Emulated"] = 0] = "Emulated";
    /**
     * Use the native encapsulation mechanism of the renderer.
     *
     * For the DOM this means using [Shadow DOM](https://w3c.github.io/webcomponents/spec/shadow/) and
     * creating a ShadowRoot for Component's Host Element.
     */
    ViewEncapsulation[ViewEncapsulation["Native"] = 1] = "Native";
    /**
     * Don't provide any template or style encapsulation.
     */
    ViewEncapsulation[ViewEncapsulation["None"] = 2] = "None";
})(exports.ViewEncapsulation || (exports.ViewEncapsulation = {}));
var ViewEncapsulation = exports.ViewEncapsulation;
exports.VIEW_ENCAPSULATION_VALUES = [ViewEncapsulation.Emulated, ViewEncapsulation.Native, ViewEncapsulation.None];
/**
 * Metadata properties available for configuring Views.
 *
 * Each Angular component requires a single `@Component` and at least one `@View` annotation. The
 * `@View` annotation specifies the HTML template to use, and lists the directives that are active
 * within the template.
 *
 * When a component is instantiated, the template is loaded into the component's shadow root, and
 * the expressions and statements in the template are evaluated against the component.
 *
 * For details on the `@Component` annotation, see {@link ComponentMetadata}.
 *
 * ### Example
 *
 * ```
 * @Component({
 *   selector: 'greet',
 *   template: 'Hello {{name}}!',
 *   directives: [GreetUser, Bold]
 * })
 * class Greet {
 *   name: string;
 *
 *   constructor() {
 *     this.name = 'World';
 *   }
 * }
 * ```
 * @ts2dart_const
 */
var ViewMetadata = (function () {
    function ViewMetadata(_a) {
        var _b = _a === void 0 ? {} : _a, templateUrl = _b.templateUrl, template = _b.template, directives = _b.directives, pipes = _b.pipes, encapsulation = _b.encapsulation, styles = _b.styles, styleUrls = _b.styleUrls;
        this.templateUrl = templateUrl;
        this.template = template;
        this.styleUrls = styleUrls;
        this.styles = styles;
        this.directives = directives;
        this.pipes = pipes;
        this.encapsulation = encapsulation;
    }
    return ViewMetadata;
}());
exports.ViewMetadata = ViewMetadata;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtM0tXVGtJTFYudG1wL2FuZ3VsYXIyL3NyYy9jb3JlL21ldGFkYXRhL3ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBOzs7O0dBSUc7QUFDSCxXQUFZLGlCQUFpQjtJQUMzQjs7Ozs7OztPQU9HO0lBQ0gsaUVBQVEsQ0FBQTtJQUNSOzs7OztPQUtHO0lBQ0gsNkRBQU0sQ0FBQTtJQUNOOztPQUVHO0lBQ0gseURBQUksQ0FBQTtBQUNOLENBQUMsRUFyQlcseUJBQWlCLEtBQWpCLHlCQUFpQixRQXFCNUI7QUFyQkQsSUFBWSxpQkFBaUIsR0FBakIseUJBcUJYLENBQUE7QUFFVSxpQ0FBeUIsR0FDaEMsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsaUJBQWlCLENBQUMsTUFBTSxFQUFFLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBR25GOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTZCRztBQUNIO0lBNkRFLHNCQUFZLEVBUU47WUFSTSw0QkFRTixFQVJPLDRCQUFXLEVBQUUsc0JBQVEsRUFBRSwwQkFBVSxFQUFFLGdCQUFLLEVBQUUsZ0NBQWEsRUFBRSxrQkFBTSxFQUFFLHdCQUFTO1FBU3JGLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3JDLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUE5RUQsSUE4RUM7QUE5RVksb0JBQVksZUE4RXhCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1R5cGV9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5cbi8qKlxuICogRGVmaW5lcyB0ZW1wbGF0ZSBhbmQgc3R5bGUgZW5jYXBzdWxhdGlvbiBvcHRpb25zIGF2YWlsYWJsZSBmb3IgQ29tcG9uZW50J3Mge0BsaW5rIFZpZXd9LlxuICpcbiAqIFNlZSB7QGxpbmsgVmlld01ldGFkYXRhI2VuY2Fwc3VsYXRpb259LlxuICovXG5leHBvcnQgZW51bSBWaWV3RW5jYXBzdWxhdGlvbiB7XG4gIC8qKlxuICAgKiBFbXVsYXRlIGBOYXRpdmVgIHNjb3Bpbmcgb2Ygc3R5bGVzIGJ5IGFkZGluZyBhbiBhdHRyaWJ1dGUgY29udGFpbmluZyBzdXJyb2dhdGUgaWQgdG8gdGhlIEhvc3RcbiAgICogRWxlbWVudCBhbmQgcHJlLXByb2Nlc3NpbmcgdGhlIHN0eWxlIHJ1bGVzIHByb3ZpZGVkIHZpYVxuICAgKiB7QGxpbmsgVmlld01ldGFkYXRhI3N0eWxlc30gb3Ige0BsaW5rIFZpZXdNZXRhZGF0YSNzdHlsZXNVcmxzfSwgYW5kIGFkZGluZyB0aGUgbmV3IEhvc3QgRWxlbWVudFxuICAgKiBhdHRyaWJ1dGUgdG8gYWxsIHNlbGVjdG9ycy5cbiAgICpcbiAgICogVGhpcyBpcyB0aGUgZGVmYXVsdCBvcHRpb24uXG4gICAqL1xuICBFbXVsYXRlZCxcbiAgLyoqXG4gICAqIFVzZSB0aGUgbmF0aXZlIGVuY2Fwc3VsYXRpb24gbWVjaGFuaXNtIG9mIHRoZSByZW5kZXJlci5cbiAgICpcbiAgICogRm9yIHRoZSBET00gdGhpcyBtZWFucyB1c2luZyBbU2hhZG93IERPTV0oaHR0cHM6Ly93M2MuZ2l0aHViLmlvL3dlYmNvbXBvbmVudHMvc3BlYy9zaGFkb3cvKSBhbmRcbiAgICogY3JlYXRpbmcgYSBTaGFkb3dSb290IGZvciBDb21wb25lbnQncyBIb3N0IEVsZW1lbnQuXG4gICAqL1xuICBOYXRpdmUsXG4gIC8qKlxuICAgKiBEb24ndCBwcm92aWRlIGFueSB0ZW1wbGF0ZSBvciBzdHlsZSBlbmNhcHN1bGF0aW9uLlxuICAgKi9cbiAgTm9uZVxufVxuXG5leHBvcnQgdmFyIFZJRVdfRU5DQVBTVUxBVElPTl9WQUxVRVMgPVxuICAgIFtWaWV3RW5jYXBzdWxhdGlvbi5FbXVsYXRlZCwgVmlld0VuY2Fwc3VsYXRpb24uTmF0aXZlLCBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXTtcblxuXG4vKipcbiAqIE1ldGFkYXRhIHByb3BlcnRpZXMgYXZhaWxhYmxlIGZvciBjb25maWd1cmluZyBWaWV3cy5cbiAqXG4gKiBFYWNoIEFuZ3VsYXIgY29tcG9uZW50IHJlcXVpcmVzIGEgc2luZ2xlIGBAQ29tcG9uZW50YCBhbmQgYXQgbGVhc3Qgb25lIGBAVmlld2AgYW5ub3RhdGlvbi4gVGhlXG4gKiBgQFZpZXdgIGFubm90YXRpb24gc3BlY2lmaWVzIHRoZSBIVE1MIHRlbXBsYXRlIHRvIHVzZSwgYW5kIGxpc3RzIHRoZSBkaXJlY3RpdmVzIHRoYXQgYXJlIGFjdGl2ZVxuICogd2l0aGluIHRoZSB0ZW1wbGF0ZS5cbiAqXG4gKiBXaGVuIGEgY29tcG9uZW50IGlzIGluc3RhbnRpYXRlZCwgdGhlIHRlbXBsYXRlIGlzIGxvYWRlZCBpbnRvIHRoZSBjb21wb25lbnQncyBzaGFkb3cgcm9vdCwgYW5kXG4gKiB0aGUgZXhwcmVzc2lvbnMgYW5kIHN0YXRlbWVudHMgaW4gdGhlIHRlbXBsYXRlIGFyZSBldmFsdWF0ZWQgYWdhaW5zdCB0aGUgY29tcG9uZW50LlxuICpcbiAqIEZvciBkZXRhaWxzIG9uIHRoZSBgQENvbXBvbmVudGAgYW5ub3RhdGlvbiwgc2VlIHtAbGluayBDb21wb25lbnRNZXRhZGF0YX0uXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGBcbiAqIEBDb21wb25lbnQoe1xuICogICBzZWxlY3RvcjogJ2dyZWV0JyxcbiAqICAgdGVtcGxhdGU6ICdIZWxsbyB7e25hbWV9fSEnLFxuICogICBkaXJlY3RpdmVzOiBbR3JlZXRVc2VyLCBCb2xkXVxuICogfSlcbiAqIGNsYXNzIEdyZWV0IHtcbiAqICAgbmFtZTogc3RyaW5nO1xuICpcbiAqICAgY29uc3RydWN0b3IoKSB7XG4gKiAgICAgdGhpcy5uYW1lID0gJ1dvcmxkJztcbiAqICAgfVxuICogfVxuICogYGBgXG4gKiBAdHMyZGFydF9jb25zdFxuICovXG5leHBvcnQgY2xhc3MgVmlld01ldGFkYXRhIHtcbiAgLyoqXG4gICAqIFNwZWNpZmllcyBhIHRlbXBsYXRlIFVSTCBmb3IgYW4gQW5ndWxhciBjb21wb25lbnQuXG4gICAqXG4gICAqIE5PVEU6IE9ubHkgb25lIG9mIGB0ZW1wbGF0ZVVybGAgb3IgYHRlbXBsYXRlYCBjYW4gYmUgZGVmaW5lZCBwZXIgVmlldy5cbiAgICpcbiAgICogPCEtLSBUT0RPOiB3aGF0J3MgdGhlIHVybCByZWxhdGl2ZSB0bz8gLS0+XG4gICAqL1xuICB0ZW1wbGF0ZVVybDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgYW4gaW5saW5lIHRlbXBsYXRlIGZvciBhbiBBbmd1bGFyIGNvbXBvbmVudC5cbiAgICpcbiAgICogTk9URTogT25seSBvbmUgb2YgYHRlbXBsYXRlVXJsYCBvciBgdGVtcGxhdGVgIGNhbiBiZSBkZWZpbmVkIHBlciBWaWV3LlxuICAgKi9cbiAgdGVtcGxhdGU6IHN0cmluZztcblxuICAvKipcbiAgICogU3BlY2lmaWVzIHN0eWxlc2hlZXQgVVJMcyBmb3IgYW4gQW5ndWxhciBjb21wb25lbnQuXG4gICAqXG4gICAqIDwhLS0gVE9ETzogd2hhdCdzIHRoZSB1cmwgcmVsYXRpdmUgdG8/IC0tPlxuICAgKi9cbiAgc3R5bGVVcmxzOiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogU3BlY2lmaWVzIGFuIGlubGluZSBzdHlsZXNoZWV0IGZvciBhbiBBbmd1bGFyIGNvbXBvbmVudC5cbiAgICovXG4gIHN0eWxlczogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyBhIGxpc3Qgb2YgZGlyZWN0aXZlcyB0aGF0IGNhbiBiZSB1c2VkIHdpdGhpbiBhIHRlbXBsYXRlLlxuICAgKlxuICAgKiBEaXJlY3RpdmVzIG11c3QgYmUgbGlzdGVkIGV4cGxpY2l0bHkgdG8gcHJvdmlkZSBwcm9wZXIgY29tcG9uZW50IGVuY2Fwc3VsYXRpb24uXG4gICAqXG4gICAqICMjIyBFeGFtcGxlXG4gICAqXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogQENvbXBvbmVudCh7XG4gICAqICAgc2VsZWN0b3I6ICdteS1jb21wb25lbnQnLFxuICAgKiAgIGRpcmVjdGl2ZXM6IFtOZ0Zvcl1cbiAgICogICB0ZW1wbGF0ZTogJ1xuICAgKiAgIDx1bD5cbiAgICogICAgIDxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiPnt7aXRlbX19PC9saT5cbiAgICogICA8L3VsPidcbiAgICogfSlcbiAgICogY2xhc3MgTXlDb21wb25lbnQge1xuICAgKiB9XG4gICAqIGBgYFxuICAgKi9cbiAgZGlyZWN0aXZlczogQXJyYXk8VHlwZSB8IGFueVtdPjtcblxuICBwaXBlczogQXJyYXk8VHlwZSB8IGFueVtdPjtcblxuICAvKipcbiAgICogU3BlY2lmeSBob3cgdGhlIHRlbXBsYXRlIGFuZCB0aGUgc3R5bGVzIHNob3VsZCBiZSBlbmNhcHN1bGF0ZWQuXG4gICAqIFRoZSBkZWZhdWx0IGlzIHtAbGluayBWaWV3RW5jYXBzdWxhdGlvbiNFbXVsYXRlZCBgVmlld0VuY2Fwc3VsYXRpb24uRW11bGF0ZWRgfSBpZiB0aGUgdmlld1xuICAgKiBoYXMgc3R5bGVzLFxuICAgKiBvdGhlcndpc2Uge0BsaW5rIFZpZXdFbmNhcHN1bGF0aW9uI05vbmUgYFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVgfS5cbiAgICovXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHt0ZW1wbGF0ZVVybCwgdGVtcGxhdGUsIGRpcmVjdGl2ZXMsIHBpcGVzLCBlbmNhcHN1bGF0aW9uLCBzdHlsZXMsIHN0eWxlVXJsc306IHtcbiAgICB0ZW1wbGF0ZVVybD86IHN0cmluZyxcbiAgICB0ZW1wbGF0ZT86IHN0cmluZyxcbiAgICBkaXJlY3RpdmVzPzogQXJyYXk8VHlwZSB8IGFueVtdPixcbiAgICBwaXBlcz86IEFycmF5PFR5cGUgfCBhbnlbXT4sXG4gICAgZW5jYXBzdWxhdGlvbj86IFZpZXdFbmNhcHN1bGF0aW9uLFxuICAgIHN0eWxlcz86IHN0cmluZ1tdLFxuICAgIHN0eWxlVXJscz86IHN0cmluZ1tdLFxuICB9ID0ge30pIHtcbiAgICB0aGlzLnRlbXBsYXRlVXJsID0gdGVtcGxhdGVVcmw7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgIHRoaXMuc3R5bGVVcmxzID0gc3R5bGVVcmxzO1xuICAgIHRoaXMuc3R5bGVzID0gc3R5bGVzO1xuICAgIHRoaXMuZGlyZWN0aXZlcyA9IGRpcmVjdGl2ZXM7XG4gICAgdGhpcy5waXBlcyA9IHBpcGVzO1xuICAgIHRoaXMuZW5jYXBzdWxhdGlvbiA9IGVuY2Fwc3VsYXRpb247XG4gIH1cbn1cbiJdfQ==