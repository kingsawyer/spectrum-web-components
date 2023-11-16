import { x } from './lit-html-126adc72.js';

var styles_stories = {
  title: "Styles"
};
const dividers = () => x`
    <style>
        .app-dividers {
            display: grid;
            position: absolute;
            inset: 0;
            grid-template-areas:
                'header header header'
                'toolbar main properties';
            grid-template-columns: 50px 1fr 250px;
            grid-template-rows: 50px 1fr;
            gap: var(--spectrum-global-alias-appframe-border-size);
            background: var(--spectrum-alias-background-color-tertiary);
        }
        header,
        aside {
            background: var(--spectrum-alias-background-color-secondary);
        }
        header {
            grid-area: header;
        }
        header + aside {
            grid-area: toolbar;
        }
        main {
            grid-area: main;
            background: var(--spectrum-alias-background-color-primary);
        }
        main + aside {
            grid-area: properties;
        }
    </style>
    <div class="app-dividers">
        <header></header>
        <aside></aside>
        <main></main>
        <aside></aside>
    </div>
`;
const __namedExportsOrder = ['dividers'];

export { __namedExportsOrder, styles_stories as default, dividers };