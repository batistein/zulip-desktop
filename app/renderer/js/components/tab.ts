import type {TabRole} from "../../../common/types";

export interface TabProps {
  role: TabRole;
  icon?: string;
  name: string;
  $root: Element;
  onClick: () => void;
  index: number;
  tabIndex: number;
  onHover?: () => void;
  onHoverOut?: () => void;
  materialIcon?: string;
  onDestroy?: () => void;
}

export default abstract class Tab {
  props: TabProps;
  abstract $el: Element;

  constructor(props: TabProps) {
    this.props = props;
  }

  registerListeners(): void {
    this.$el.addEventListener("click", this.props.onClick);

    if (this.props.onHover !== undefined) {
      this.$el.addEventListener("mouseover", this.props.onHover);
    }

    if (this.props.onHoverOut !== undefined) {
      this.$el.addEventListener("mouseout", this.props.onHoverOut);
    }
  }

  async activate(): Promise<void> {
    this.$el.classList.add("active");
  }

  async deactivate(): Promise<void> {
    this.$el.classList.remove("active");
  }

  async destroy(): Promise<void> {
    this.$el.remove();
  }
}
