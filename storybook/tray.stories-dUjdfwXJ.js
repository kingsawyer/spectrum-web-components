import './sp-dialog-NYoaWY3i.js';
import './sp-menu-IOObpxkj.js';
import './sp-menu-item-owaTMTdi.js';
import './sp-menu-divider-I6_kNHuJ.js';
import './sp-tray-tqIxH-9J.js';
import { x } from './lit-html-GmIhAbMP.js';
import './sp-divider-AAiUUV_Z.js';
import './divider.css-J1TsgOfe.js';
import './lit-element-xBOPiTek.js';
import './sizedMixin-JAQz02f5.js';
import './define-element-tO8-r1bu.js';
import './query-assigned-elements-1m6Cs7Ix.js';
import './base-STdhtiz1.js';
import './sp-close-button-6ISqShJo.js';
import './spectrum-icon-cross.css-jF12fKiX.js';
import './ButtonBase--K-lWDuL.js';
import './like-anchor-A-VxslPW.js';
import './if-defined-pV6JZKXB.js';
import './focusable-GZ06kf6F.js';
import './focus-visible-68QWcOy-.js';
import './observe-slot-text-RiUvi5fT.js';
import './mutation-controller-KeE5MDSl.js';
import './query-assigned-nodes-jGvx5qKR.js';
import './query-JMOstM_r.js';
import './custom-tag-z2Xx81l9.js';
import './IconBase-EFa3DHxz.js';
import './sp-icon-cross500-ovz6v6df.js';
import './Cross500-CuS5PwKf.js';
import './sp-button-group-u07l3eIa.js';
import './sp-icon-alert-HIZE6wdL.js';
import './custom-tag-JXLWq-Sj.js';
import './AlertDialog-ey-c2lv-.js';
import './sp-button-k0B6adN0.js';
import './when-kvvOyHr2.js';
import './random-id-M2k-wjyE.js';
import './condition-attribute-with-id-nb2zon-s.js';
import './resize-controller--ByFn5Jx.js';
import './observe-slot-presence-tyJ_SCNf.js';
import './class-map-Q7DIFm9x.js';
import './directive-C1gRZbRe.js';
import './spectrum-icon-checkmark.css-vEh5gvyq.js';
import './sp-icon-chevron100-byRnlRuE.js';
import './Chevron100-ok1mOHjI.js';
import './spectrum-icon-chevron.css-hA8DP86t.js';
import './DependencyManger-0SYmL--C.js';
import './slottable-request-event-SQgFLN7g.js';
import './sp-underlay-JqwB1eta.js';
import './first-focusable-in-LZ7hcu4z.js';
import './focusable-selectors-VCrFWGqo.js';
import './MatchMedia-SMh19R1m.js';
import './modal.css-JF8KQ-ZN.js';

var tray_stories = {
  title: "Tray",
  component: "sp-tray",
  args: {
    open: true
  },
  argTypes: {
    open: {
      name: "open",
      type: { name: "boolean", required: false },
      description: "Whether the tray is open.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false }
      },
      control: {
        type: "boolean"
      }
    }
  }
};
const Default = (args) => {
  return x`
        <sp-tray ?open=${args.open}>
            <sp-dialog size="s">
                <h2 slot="heading">New Messages</h2>
                You have 5 new messages.
            </sp-dialog>
        </sp-tray>
    `;
};
const menu = (args) => {
  return x`
        <sp-tray ?open=${args.open}>
            <sp-menu style="width: 100%">
                <sp-menu-item>Deselect</sp-menu-item>
                <sp-menu-item selected>Select Inverse</sp-menu-item>
                <sp-menu-item>Feather...</sp-menu-item>
                <sp-menu-item>Select and Mask...</sp-menu-item>
                <sp-menu-divider></sp-menu-divider>
                <sp-menu-item>Save Selection</sp-menu-item>
                <sp-menu-item disabled>Make Work Path</sp-menu-item>
            </sp-menu>
        </sp-tray>
    `;
};
const __namedExportsOrder = ['Default', 'menu'];

export { Default, __namedExportsOrder, tray_stories as default, menu };