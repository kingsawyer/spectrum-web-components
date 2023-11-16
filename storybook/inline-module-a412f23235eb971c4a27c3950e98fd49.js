import './sb-preview/runtime.js';

const channel = __STORYBOOK_MODULE_CHANNEL_POSTMESSAGE__.createChannel({ page: 'preview' });
__STORYBOOK_MODULE_PREVIEW_API__.addons.setChannel(channel);
window.__STORYBOOK_ADDONS_CHANNEL__ = channel;

const { SERVER_CHANNEL_URL } = globalThis;
if (SERVER_CHANNEL_URL) {
  const serverChannel = __STORYBOOK_MODULE_CHANNEL_WEBSOCKET__.createChannel({ url: SERVER_CHANNEL_URL });
  __STORYBOOK_MODULE_PREVIEW_API__.addons.setServerChannel(serverChannel);
  window.__STORYBOOK_SERVER_CHANNEL__ = serverChannel;
}

const importers = {
  './packages/accordion/stories/accordion-densities-compact.stories.js': () => import('./accordion-densities-compact.stories-626c2d1b.js'),
  './packages/accordion/stories/accordion-densities-spacious.stories.js': () => import('./accordion-densities-spacious.stories-8b1b2320.js'),
  './packages/accordion/stories/accordion-sizes.stories.js': () => import('./accordion-sizes.stories-b4e552de.js'),
  './packages/accordion/stories/accordion.stories.js': () => import('./accordion.stories-3b9313af.js'),
  './packages/action-bar/stories/action-bar.stories.js': () => import('./action-bar.stories-6cd14f8b.js'),
  './packages/action-button/stories/action-button-black-quiet.stories.js': () => import('./action-button-black-quiet.stories-98d50190.js'),
  './packages/action-button/stories/action-button-black.stories.js': () => import('./action-button-black.stories-b7a9c39d.js'),
  './packages/action-button/stories/action-button-emphasized-quiet.stories.js': () => import('./action-button-emphasized-quiet.stories-32f2a997.js'),
  './packages/action-button/stories/action-button-emphasized.stories.js': () => import('./action-button-emphasized.stories-7a178949.js'),
  './packages/action-button/stories/action-button-quiet.stories.js': () => import('./action-button-quiet.stories-3ee21072.js'),
  './packages/action-button/stories/action-button-standard.stories.js': () => import('./action-button-standard.stories-0d84dbb0.js'),
  './packages/action-button/stories/action-button-white-quiet.stories.js': () => import('./action-button-white-quiet.stories-fa2f5e1f.js'),
  './packages/action-button/stories/action-button-white.stories.js': () => import('./action-button-white.stories-9e2d3f68.js'),
  './packages/action-button/stories/action-button.stories.js': () => import('./action-button.stories-c14aa028.js'),
  './packages/action-group/stories/action-group-sizes.stories.js': () => import('./action-group-sizes.stories-122858d7.js'),
  './packages/action-group/stories/action-group-tooltip.stories.js': () => import('./action-group-tooltip.stories-94792bb4.js'),
  './packages/action-group/stories/action-group.stories.js': () => import('./action-group.stories-5d0a6b32.js'),
  './packages/action-menu/stories/action-menu-sizes.stories.js': () => import('./action-menu-sizes.stories-4fdafa40.js'),
  './packages/action-menu/stories/action-menu.stories.js': () => import('./action-menu.stories-f0b5e575.js'),
  './packages/alert-dialog/stories/alert-dialog.stories.js': () => import('./alert-dialog.stories-9e75f5f1.js'),
  './packages/asset/stories/asset.stories.js': () => import('./asset.stories-3bb9c869.js'),
  './packages/avatar/stories/avatar.stories.js': () => import('./avatar.stories-fe8da518.js'),
  './packages/badge/stories/badge.stories.js': () => import('./badge.stories-65a45ff1.js'),
  './packages/banner/stories/banner.stories.js': () => import('./banner.stories-a5b41d8f.js'),
  './packages/button-group/stories/button-group-sizes.stories.js': () => import('./button-group-sizes.stories-4fadb290.js'),
  './packages/button-group/stories/button-group.stories.js': () => import('./button-group.stories-753a2e7b.js'),
  './packages/button/stories/button-accent-fill-sizes.stories.js': () => import('./button-accent-fill-sizes.stories-37b2e5c0.js'),
  './packages/button/stories/button-accent-fill.stories.js': () => import('./button-accent-fill.stories-36bcd713.js'),
  './packages/button/stories/button-accent-outline-sizes.stories.js': () => import('./button-accent-outline-sizes.stories-537a1a7e.js'),
  './packages/button/stories/button-accent-outline.stories.js': () => import('./button-accent-outline.stories-c01e55f2.js'),
  './packages/button/stories/button-black-fill-sizes.stories.js': () => import('./button-black-fill-sizes.stories-e700b11f.js'),
  './packages/button/stories/button-black-fill.stories.js': () => import('./button-black-fill.stories-6a1d41ef.js'),
  './packages/button/stories/button-black-outline-sizes.stories.js': () => import('./button-black-outline-sizes.stories-3c7cb77d.js'),
  './packages/button/stories/button-black-outline.stories.js': () => import('./button-black-outline.stories-7682243c.js'),
  './packages/button/stories/button-negative-fill-sizes.stories.js': () => import('./button-negative-fill-sizes.stories-33031f15.js'),
  './packages/button/stories/button-negative-fill.stories.js': () => import('./button-negative-fill.stories-60abef28.js'),
  './packages/button/stories/button-negative-outline-sizes.stories.js': () => import('./button-negative-outline-sizes.stories-932bb630.js'),
  './packages/button/stories/button-negative-outline.stories.js': () => import('./button-negative-outline.stories-9e73a429.js'),
  './packages/button/stories/button-primary-fill-sizes.stories.js': () => import('./button-primary-fill-sizes.stories-a68c78d3.js'),
  './packages/button/stories/button-primary-fill.stories.js': () => import('./button-primary-fill.stories-bc9cdb28.js'),
  './packages/button/stories/button-primary-outline-sizes.stories.js': () => import('./button-primary-outline-sizes.stories-43285711.js'),
  './packages/button/stories/button-primary-outline.stories.js': () => import('./button-primary-outline.stories-3656d37e.js'),
  './packages/button/stories/button-secondary-fill-sizes.stories.js': () => import('./button-secondary-fill-sizes.stories-5acedb3c.js'),
  './packages/button/stories/button-secondary-fill.stories.js': () => import('./button-secondary-fill.stories-f9536746.js'),
  './packages/button/stories/button-secondary-outline-sizes.stories.js': () => import('./button-secondary-outline-sizes.stories-92075a44.js'),
  './packages/button/stories/button-secondary-outline.stories.js': () => import('./button-secondary-outline.stories-9b26bfe5.js'),
  './packages/button/stories/button-white-fill-sizes.stories.js': () => import('./button-white-fill-sizes.stories-264cdc40.js'),
  './packages/button/stories/button-white-fill.stories.js': () => import('./button-white-fill.stories-89ea4a5d.js'),
  './packages/button/stories/button-white-outline-sizes.stories.js': () => import('./button-white-outline-sizes.stories-e96ba402.js'),
  './packages/button/stories/button-white-outline.stories.js': () => import('./button-white-outline.stories-bcbfdd47.js'),
  './packages/card/stories/card.stories.js': () => import('./card.stories-19aeaa96.js'),
  './packages/checkbox/stories/checkbox-sizes.stories.js': () => import('./checkbox-sizes.stories-f284ec5a.js'),
  './packages/checkbox/stories/checkbox.stories.js': () => import('./checkbox.stories-9843a6e7.js'),
  './packages/coachmark/stories/coachmark.stories.js': () => import('./coachmark.stories-43a05532.js'),
  './packages/color-area/stories/color-area.stories.js': () => import('./color-area.stories-ed0fc6bb.js'),
  './packages/color-handle/stories/color-handle.stories.js': () => import('./color-handle.stories-ec5cb6ac.js'),
  './packages/color-loupe/stories/color-loupe.stories.js': () => import('./color-loupe.stories-3d95d3fe.js'),
  './packages/color-slider/stories/color-slider.stories.js': () => import('./color-slider.stories-f9a885a6.js'),
  './packages/color-wheel/stories/color-wheel.stories.js': () => import('./color-wheel.stories-b28a213a.js'),
  './packages/dialog/stories/dialog-base.stories.js': () => import('./dialog-base.stories-e62e76dd.js'),
  './packages/dialog/stories/dialog-wrapper.stories.js': () => import('./dialog-wrapper.stories-4f947221.js'),
  './packages/dialog/stories/dialog.stories.js': () => import('./dialog.stories-55707848.js'),
  './packages/divider/stories/divider.stories.js': () => import('./divider.stories-50847d30.js'),
  './packages/dropzone/stories/dropzone.stories.js': () => import('./dropzone.stories-45f4699b.js'),
  './packages/field-group/stories/field-group.stories.js': () => import('./field-group.stories-758b94ed.js'),
  './packages/field-label/stories/field-label.stories.js': () => import('./field-label.stories-3c7ea08e.js'),
  './packages/help-text/stories/help-text-sizes.stories.js': () => import('./help-text-sizes.stories-911e8395.js'),
  './packages/help-text/stories/help-text.stories.js': () => import('./help-text.stories-73681504.js'),
  './packages/icon/stories/icon.stories.js': () => import('./icon.stories-1660de16.js'),
  './packages/icons-ui/stories/icons-ui.stories.js': () => import('./icons-ui.stories-86126c00.js'),
  './packages/icons-workflow/stories/icons-workflow.stories.js': () => import('./icons-workflow.stories-192062f6.js'),
  './packages/icons/stories/icons.stories.js': () => import('./icons.stories-29cd4e41.js'),
  './packages/illustrated-message/stories/illustrated-message.stories.js': () => import('./illustrated-message.stories-84b535eb.js'),
  './packages/infield-button/stories/infield-button-sizes.stories.js': () => import('./infield-button-sizes.stories-db45e9da.js'),
  './packages/infield-button/stories/infield-button.stories.js': () => import('./infield-button.stories-5fc0dbf9.js'),
  './packages/link/stories/link.stories.js': () => import('./link.stories-c8bef65d.js'),
  './packages/menu/stories/menu-divider.stories.js': () => import('./menu-divider.stories-05d5823d.js'),
  './packages/menu/stories/menu-group.stories.js': () => import('./menu-group.stories-186f1de6.js'),
  './packages/menu/stories/menu-item.disconnected.stories.js': () => import('./menu-item.disconnected.stories-31762828.js'),
  './packages/menu/stories/menu-item.stories.js': () => import('./menu-item.stories-826ac132.js'),
  './packages/menu/stories/menu-sizes.stories.js': () => import('./menu-sizes.stories-968d868b.js'),
  './packages/menu/stories/menu.stories.js': () => import('./menu.stories-c624b7d5.js'),
  './packages/menu/stories/submenu.stories.js': () => import('./submenu.stories-faf906f4.js'),
  './packages/meter/stories/meter-sizes.stories.js': () => import('./meter-sizes.stories-0d7d0a1e.js'),
  './packages/meter/stories/meter.stories.js': () => import('./meter.stories-3354dec6.js'),
  './packages/number-field/stories/number-field-sizes.stories.js': () => import('./number-field-sizes.stories-89b43db7.js'),
  './packages/number-field/stories/number-field.stories.js': () => import('./number-field.stories-60debc5f.js'),
  './packages/overlay/stories/overlay-element.stories.js': () => import('./overlay-element.stories-7ed11007.js'),
  './packages/overlay/stories/overlay.stories.js': () => import('./overlay.stories-a7551a82.js'),
  './packages/picker-button/stories/picker-button-sizes.stories.js': () => import('./picker-button-sizes.stories-a9337e44.js'),
  './packages/picker-button/stories/picker-button.stories.js': () => import('./picker-button.stories-dd46de80.js'),
  './packages/picker/stories/picker-sizes.stories.js': () => import('./picker-sizes.stories-c23939a3.js'),
  './packages/picker/stories/picker.stories.js': () => import('./picker.stories-e966b067.js'),
  './packages/popover/stories/popover.stories.js': () => import('./popover.stories-33575fc6.js'),
  './packages/progress-bar/stories/progress-bar-sizes.stories.js': () => import('./progress-bar-sizes.stories-89104806.js'),
  './packages/progress-bar/stories/progress-bar.stories.js': () => import('./progress-bar.stories-c04686d7.js'),
  './packages/progress-circle/stories/progress-circle.stories.js': () => import('./progress-circle.stories-89a44005.js'),
  './packages/quick-actions/stories/quick-actions.stories.js': () => import('./quick-actions.stories-3d350371.js'),
  './packages/radio/stories/radio-sizes.stories.js': () => import('./radio-sizes.stories-b82d2671.js'),
  './packages/radio/stories/radio.stories.js': () => import('./radio.stories-c8756207.js'),
  './packages/search/stories/search-sizes.stories.js': () => import('./search-sizes.stories-0da850dd.js'),
  './packages/search/stories/search.stories.js': () => import('./search.stories-07aa3e2e.js'),
  './packages/sidenav/stories/sidenav.stories.js': () => import('./sidenav.stories-8864815b.js'),
  './packages/slider/stories/slider-sizes.stories.js': () => import('./slider-sizes.stories-74a6e8ba.js'),
  './packages/slider/stories/slider.stories.js': () => import('./slider.stories-0144cd5f.js'),
  './packages/split-button/stories/split-button-accent-field.stories.js': () => import('./split-button-accent-field.stories-d0460882.js'),
  './packages/split-button/stories/split-button-accent-more.stories.js': () => import('./split-button-accent-more.stories-7c83df29.js'),
  './packages/split-button/stories/split-button-primary-field.stories.js': () => import('./split-button-primary-field.stories-eae42389.js'),
  './packages/split-button/stories/split-button-primary-more.stories.js': () => import('./split-button-primary-more.stories-85bf3bc1.js'),
  './packages/split-button/stories/split-button-secondary-field.stories.js': () => import('./split-button-secondary-field.stories-c0cb15aa.js'),
  './packages/split-button/stories/split-button-secondary-more.stories.js': () => import('./split-button-secondary-more.stories-95469cda.js'),
  './packages/split-view/stories/split-view.stories.js': () => import('./split-view.stories-e2361af6.js'),
  './packages/status-light/stories/status-light.stories.js': () => import('./status-light.stories-cf2ce012.js'),
  './packages/swatch/stories/swatch-group.stories.js': () => import('./swatch-group.stories-974dacae.js'),
  './packages/swatch/stories/swatch-sizes.stories.js': () => import('./swatch-sizes.stories-34ca5942.js'),
  './packages/swatch/stories/swatch.stories.js': () => import('./swatch.stories-edb6586f.js'),
  './packages/switch/stories/switch-sizes.stories.js': () => import('./switch-sizes.stories-769ac017.js'),
  './packages/switch/stories/switch.stories.js': () => import('./switch.stories-02bf3ae4.js'),
  './packages/table/stories/table-elements.stories.js': () => import('./table-elements.stories-8ffb40f0.js'),
  './packages/table/stories/table-virtualized.stories.js': () => import('./table-virtualized.stories-ecf1fc54.js'),
  './packages/tabs/stories/tabs-horizontal-sizes.stories.js': () => import('./tabs-horizontal-sizes.stories-f951ea5a.js'),
  './packages/tabs/stories/tabs-overflow-panel-sizes.stories.js': () => import('./tabs-overflow-panel-sizes.stories-677bb36c.js'),
  './packages/tabs/stories/tabs-overflow-sizes.stories.js': () => import('./tabs-overflow-sizes.stories-9d27bb2b.js'),
  './packages/tabs/stories/tabs-overflow.stories.js': () => import('./tabs-overflow.stories-9315d585.js'),
  './packages/tabs/stories/tabs-vertical-right-sizes.stories.js': () => import('./tabs-vertical-right-sizes.stories-58897490.js'),
  './packages/tabs/stories/tabs-vertical-sizes.stories.js': () => import('./tabs-vertical-sizes.stories-ca9dd85b.js'),
  './packages/tabs/stories/tabs.stories.js': () => import('./tabs.stories-116a9b5f.js'),
  './packages/tags/stories/tags-sizes.stories.js': () => import('./tags-sizes.stories-dce82a75.js'),
  './packages/tags/stories/tags.stories.js': () => import('./tags.stories-4f099cda.js'),
  './packages/textfield/stories/textarea-sizes.stories.js': () => import('./textarea-sizes.stories-262b7730.js'),
  './packages/textfield/stories/textarea.stories.js': () => import('./textarea.stories-c72ab283.js'),
  './packages/textfield/stories/textfield-sizes.stories.js': () => import('./textfield-sizes.stories-aef996d3.js'),
  './packages/textfield/stories/textfield.stories.js': () => import('./textfield.stories-51ec72fb.js'),
  './packages/thumbnail/stories/thumbnail-sizes.stories.js': () => import('./thumbnail-sizes.stories-8c401950.js'),
  './packages/thumbnail/stories/thumbnail.stories.js': () => import('./thumbnail.stories-e3494cca.js'),
  './packages/toast/stories/toast.stories.js': () => import('./toast.stories-1f87eeb3.js'),
  './packages/tooltip/stories/tooltip.stories.js': () => import('./tooltip.stories-cf59e521.js'),
  './packages/top-nav/stories/top-nav-sizes.stories.js': () => import('./top-nav-sizes.stories-65344d49.js'),
  './packages/top-nav/stories/top-nav.stories.js': () => import('./top-nav.stories-f60fc0f3.js'),
  './packages/tray/stories/tray.stories.js': () => import('./tray.stories-e0457d78.js'),
  './packages/underlay/stories/underlay.stories.js': () => import('./underlay.stories-9e54be5c.js'),
  './tools/grid/stories/grid.stories.js': () => import('./grid.stories-bafe9588.js'),
  './tools/styles/stories/styles.stories.js': () => import('./styles.stories-89d2d3ce.js'),
  './tools/theme/stories/theme.stories.js': () => import('./theme.stories-85bdc59b.js')
};

function importFn(path) {
  return importers[path]();
}

const getProjectAnnotations = async () => {
  const configs = await Promise.all([
    import('./config-1e88ee1a.js'),
    import('./preview-fd025a1d.js'),
    import('./preview-418ae100.js'),
    import('./preview-1fe00761.js'),
    import('./preview-f0d269c7.js'),
    import('./preview-31567fca.js'),
    import('./preview-0f0849fa.js'),
    import('./preview-7fe9d3eb.js'),
    import('./preview-46492839.js'),
    import('./preview-4d7b8e26.js')
  ]);
  return __STORYBOOK_MODULE_PREVIEW_API__.composeConfigs(configs);
};

window.__STORYBOOK_PREVIEW__ = window.__STORYBOOK_PREVIEW__ || new __STORYBOOK_MODULE_PREVIEW_API__.PreviewWeb();

window.__STORYBOOK_STORY_STORE__ = window.__STORYBOOK_STORY_STORE__ || window.__STORYBOOK_PREVIEW__.storyStore;
window.__STORYBOOK_CLIENT_API__ = window.__STORYBOOK_CLIENT_API__ || new __STORYBOOK_MODULE_PREVIEW_API__.ClientApi({ storyStore: window.__STORYBOOK_PREVIEW__.storyStore });
window.__STORYBOOK_PREVIEW__.initialize({ importFn, getProjectAnnotations });