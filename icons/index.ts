import { AnimatedIconProps } from "./types";
import AlignCenterIcon from "./align-center-icon";
import ArrowBackIcon from "./arrow-back-icon";
import ArrowBackUpIcon from "./arrow-back-up-icon";
import ArrowNarrowDownDashedIcon from "./arrow-narrow-down-dashed-icon";
import ArrowNarrowDownIcon from "./arrow-narrow-down-icon";
import ArrowNarrowLeftDashedIcon from "./arrow-narrow-left-dashed-icon";
import ArrowNarrowLeftIcon from "./arrow-narrow-left-icon";
import ArrowNarrowRightDashedIcon from "./arrow-narrow-right-dashed-icon";
import ArrowNarrowRightIcon from "./arrow-narrow-right-icon";
import ArrowNarrowUpDashedIcon from "./arrow-narrow-up-dashed-icon";
import ArrowNarrowUpIcon from "./arrow-narrow-up-icon";
import AppleBrandLogo from "./apple-brand-logo";
import BatteryIcon from "./battery-icon";
import BatteryChargingIcon from "./battery-charging-icon";
import BatteryPauseIcon from "./battery-pause-icon";
import BluetoothConnectedIcon from "./bluetooth-connected-icon";
import BookIcon from "./book-icon";
import BookmarkIcon from "./bookmark-icon";
import BrandGoogleIcon from "./brand-google-icon";
import BrightnessDownIcon from "./brightness-down-icon";
import BulbSvg from "./bulb-svg";
import CartIcon from "./cart-icon";
import ChartBarIcon from "./chart-bar-icon";
import ChartCovariateIcon from "./chart-covariate-icon";
import ChartHistogramIcon from "./chart-histogram-icon";
import ChartLineIcon from "./chart-line-icon";
import ChartPieIcon from "./chart-pie-icon";
import CheckedIcon from "./checked-icon";
import ClockIcon from "./clock-icon";
import CreditCard from "./credit-card";
import CopyIcon from "./copy-icon";
import CopyOffIcon from "./copy-off-icon";
import CurrencyBitcoinIcon from "./currency-bitcoin-icon";
import CurrencyDollarIcon from "./currency-dollar-icon";
import CurrencyEthereumIcon from "./currency-ethereum-icon";
import CurrencyEuroIcon from "./currency-euro-icon";
import CurrencyRupeeIcon from "./currency-rupee-icon";
import DeviceAirpodsIcon from "./device-airpods-icon";
import DialpadIcon from "./dialpad-icon";
import DoubleCheckIcon from "./double-check-icon";
import DotsHorizontalIcon from "./dots-horizontal-icon";
import DotsVerticalIcon from "./dots-vertical-icon";
import DownCheveron from "./down-cheveron";
import EyeIcon from "./eye-icon";
import EyeOffIcon from "./eye-off-icon";
import ExternalLinkIcon from "./external-link-icon";
import FileDescriptionIcon from "./file-description-icon";
import FlameIcon from "./flame-icon";
import FilledBellIcon from "./filled-bell-icon";
import FilledCheckedIcon from "./filled-checked-icon";
import GearIcon from "./gear-icon";
import GhostIcon from "./ghost-icon";
import GithubIcon from "./github-icon";
import GithubCopilotIcon from "./github-copilot-icon";
import GitlabIcon from "./gitlab-icon";
import HeartIcon from "./heart-icon";
import HistoryCircleIcon from "./history-circle-icon";
import InfoCircleIcon from "./info-circle-icon";
import Instagram from "./instagram-icon";
import LikeIcon from "./like-icon";
import LinkIcon from "./link-icon";
import LockIcon from "./lock-icon";
import LogoutIcon from "./logout-icon";
import MagnifierIcon from "./magnifier-icon";
import MailFilledIcon from "./mail-filled-icon";
import MessageCircleIcon from "./message-circle-icon";
import MoonIcon from "./moon-icon";
import PenIcon from "./pen-icon";
import PhoneVolume from "./phone-volume";
import PlayerIcon from "./player-icon";
import QrCodeIcon from "./qrcode-icon";
import QuestionMark from "./question-mark";
import RefreshIcon from "./refresh-icon";
import RightCheveron from "./right-cheveron";
import RocketIcon from "./rocket-icon";
import RosetteDiscountIcon from "./rosette-discount-icon";
import RosetteDiscountCheckIcon from "./rosette-discount-check-icon";
import SendIcon from "./send-icon";
import ShieldCheck from "./shield-check";
import ShoppingCartIcon from "./shopping-cart-icon";
import SimpleCheckedIcon from "./simple-checked-icon";
import SkullEmoji from "./skull-emoji";
import SparklesIcon from "./sparkles-icon";
import TelephoneIcon from "./telephone-icon";
import TextIcon from "./text-icon";
import ToggleIcon from "./toggle-icon";
import TrashIcon from "./trash-icon";
import UnorderedListIcon from "./unordered-list-icon";
import UserCheckIcon from "./user-check-icon";
import UserPlusIcon from "./user-plus-icon";
import UsersIcon from "./users-icon";
import UsersGroupIcon from "./users-group-icon";
import VinylIcon from "./vinyl-icon";
import WashingMachineIcon from "./washing-machine-icon";
import GlobeIcon from "./globe-icon";
import HashtagIcon from "./hashtag-icon";
import KeyframesIcon from "./keyframes-icon";
import LayersIcon from "./layers-icon";
import LayoutBottombarCollapseIcon from "./layout-bottombar-collapse-icon";
import LayoutSidebarRightIcon from "./layout-sidebar-right-icon";
import PaintIcon from "./paint-icon";
import PlugConnectedIcon from "./plug-connected-icon";
import PlugConnectedXIcon from "./plug-connected-x-icon";
import StackIcon from "./stack-icon";
import Stack3Icon from "./stack-3-icon";
import WifiIcon from "./wifi-icon";
import WifiOffIcon from "./wifi-off-icon";
import WhatsappIcon from "./whatsapp-icon";
import WorldIcon from "./world-icon";
import TerminalIcon from "./terminal-icon";
import TwitterXIcon from "./twitter-x-icon";
import XIcon from "./x-icon";
import YoutubeIcon from "./youtube-icon";

export interface IconType {
  name: string;
  icon: React.FC<AnimatedIconProps>;
  keywords: string[];
  customProps?: {
    name: string;
    type: string;
    defaultValue: string | boolean | number;
  }[];
}

const ICON_LIST: IconType[] = [
  {
    name: "arrow-back-icon",
    icon: ArrowBackIcon,
    keywords: ["arrow", "back", "return", "undo", "previous"],
  },
  {
    name: "arrow-back-up-icon",
    icon: ArrowBackUpIcon,
    keywords: ["arrow", "back", "up", "undo", "return"],
  },
  {
    name: "arrow-narrow-down-dashed-icon",
    icon: ArrowNarrowDownDashedIcon,
    keywords: ["arrow", "down", "dashed", "download", "scroll"],
  },
  {
    name: "arrow-narrow-down-icon",
    icon: ArrowNarrowDownIcon,
    keywords: ["arrow", "down", "download", "scroll"],
  },
  {
    name: "arrow-narrow-left-dashed-icon",
    icon: ArrowNarrowLeftDashedIcon,
    keywords: ["arrow", "left", "dashed", "back", "previous"],
  },
  {
    name: "arrow-narrow-left-icon",
    icon: ArrowNarrowLeftIcon,
    keywords: ["arrow", "left", "back", "previous"],
  },
  {
    name: "arrow-narrow-right-dashed-icon",
    icon: ArrowNarrowRightDashedIcon,
    keywords: ["arrow", "right", "dashed", "next", "forward"],
  },
  {
    name: "arrow-narrow-right-icon",
    icon: ArrowNarrowRightIcon,
    keywords: ["arrow", "right", "next", "forward"],
  },
  {
    name: "arrow-narrow-up-dashed-icon",
    icon: ArrowNarrowUpDashedIcon,
    keywords: ["arrow", "up", "dashed", "upload", "scroll"],
  },
  {
    name: "arrow-narrow-up-icon",
    icon: ArrowNarrowUpIcon,
    keywords: ["arrow", "up", "upload", "scroll"],
  },
  {
    name: "apple-brand-logo",
    icon: AppleBrandLogo,
    keywords: ["apple", "brand", "logo", "mac", "ios"],
  },
  {
    name: "align-center-icon",
    icon: AlignCenterIcon,
    keywords: ["align", "center", "text", "format", "paragraph"],
  },
  {
    name: "battery-icon",
    icon: BatteryIcon,
    keywords: ["battery", "charging", "bolt"],
  },
  {
    name: "battery-charging-icon",
    icon: BatteryChargingIcon,
    keywords: ["battery", "charging", "power"],
  },
  {
    name: "battery-pause-icon",
    icon: BatteryPauseIcon,
    keywords: ["battery", "pause", "hold", "wait"],
  },
  {
    name: "bluetooth-connected-icon",
    icon: BluetoothConnectedIcon,
    keywords: [
      "bluetooth",
      "wireless",
      "connected",
      "pairing",
      "audio",
      "device",
    ],
  },
  {
    name: "book-icon",
    icon: BookIcon,
    keywords: ["book", "read", "library", "study"],
  },
  {
    name: "bookmark-icon",
    icon: BookmarkIcon,
    keywords: ["bookmark", "save", "favorite", "mark"],
  },
  {
    name: "brand-google-icon",
    icon: BrandGoogleIcon,
    keywords: ["google", "brand", "logo", "search", "social"],
  },
  {
    name: "brightness-down-icon",
    icon: BrightnessDownIcon,
    keywords: ["brightness", "down", "dim", "light", "sun"],
  },
  {
    name: "bulb-svg",
    icon: BulbSvg,
    keywords: ["bulb", "light", "idea", "creativity"],
  },
  {
    name: "cart-icon",
    icon: CartIcon,
    keywords: ["cart", "shopping", "buy", "store"],
  },
  {
    name: "chart-bar-icon",
    icon: ChartBarIcon,
    keywords: ["chart", "bar", "graph", "statistics", "data", "analytics"],
  },
  {
    name: "chart-covariate-icon",
    icon: ChartCovariateIcon,
    keywords: ["chart", "covariate", "scatter", "plot", "correlation", "data"],
  },
  {
    name: "chart-histogram-icon",
    icon: ChartHistogramIcon,
    keywords: [
      "chart",
      "histogram",
      "graph",
      "distribution",
      "statistics",
      "data",
    ],
  },
  {
    name: "chart-line-icon",
    icon: ChartLineIcon,
    keywords: ["chart", "line", "graph", "trend", "statistics", "data"],
  },
  {
    name: "chart-pie-icon",
    icon: ChartPieIcon,
    keywords: ["chart", "pie", "graph", "percentage", "statistics", "data"],
  },
  {
    name: "checked-icon",
    icon: CheckedIcon,
    keywords: ["check", "tick", "success", "done"],
  },
  {
    name: "clock-icon",
    icon: ClockIcon,
    keywords: ["clock", "time", "watch", "timer", "schedule"],
  },
  {
    name: "credit-card",
    icon: CreditCard,
    keywords: ["credit", "card", "payment", "money"],
  },
  {
    name: "currency-bitcoin-icon",
    icon: CurrencyBitcoinIcon,
    keywords: [
      "currency",
      "bitcoin",
      "crypto",
      "btc",
      "cryptocurrency",
      "money",
      "digital",
    ],
  },
  {
    name: "currency-dollar-icon",
    icon: CurrencyDollarIcon,
    keywords: [
      "currency",
      "dollar",
      "money",
      "finance",
      "payment",
      "cash",
      "usd",
    ],
  },
  {
    name: "currency-ethereum-icon",
    icon: CurrencyEthereumIcon,
    keywords: [
      "currency",
      "ethereum",
      "crypto",
      "eth",
      "cryptocurrency",
      "blockchain",
    ],
  },
  {
    name: "currency-euro-icon",
    icon: CurrencyEuroIcon,
    keywords: [
      "currency",
      "euro",
      "money",
      "finance",
      "payment",
      "eur",
      "europe",
    ],
  },
  {
    name: "currency-rupee-icon",
    icon: CurrencyRupeeIcon,
    keywords: [
      "currency",
      "rupee",
      "money",
      "finance",
      "payment",
      "inr",
      "india",
    ],
  },
  {
    name: "device-airpods-icon",
    icon: DeviceAirpodsIcon,
    keywords: [
      "device",
      "airpods",
      "earbuds",
      "audio",
      "wireless",
      "headphones",
      "apple",
    ],
  },
  {
    name: "dialpad-icon",
    icon: DialpadIcon,
    keywords: ["dialpad", "phone", "keypad", "numbers", "call", "dial"],
  },
  {
    name: "copy-icon",
    icon: CopyIcon,
    keywords: ["copy", "clipboard", "duplicate", "paste"],
  },
  {
    name: "copy-off-icon",
    icon: CopyOffIcon,
    keywords: ["copy", "off", "disabled", "no copy"],
  },
  {
    name: "double-check-icon",
    icon: DoubleCheckIcon,
    keywords: ["check", "double", "read", "seen"],
  },
  {
    name: "dots-horizontal-icon",
    icon: DotsHorizontalIcon,
    keywords: ["dots", "menu", "more", "options", "horizontal"],
  },
  {
    name: "dots-vertical-icon",
    icon: DotsVerticalIcon,
    keywords: ["dots", "menu", "more", "options", "vertical"],
  },
  {
    name: "down-cheveron",
    icon: DownCheveron,
    keywords: ["arrow", "down", "expand", "more"],
  },
  {
    name: "eye-icon",
    icon: EyeIcon,
    keywords: ["eye", "view", "see", "visible", "watch", "look"],
  },
  {
    name: "eye-off-icon",
    icon: EyeOffIcon,
    keywords: [
      "eye",
      "off",
      "hidden",
      "invisible",
      "hide",
      "privacy",
      "password",
    ],
  },
  {
    name: "external-link-icon",
    icon: ExternalLinkIcon,
    keywords: ["external", "link", "open", "new", "window", "tab", "out"],
  },
  {
    name: "file-description-icon",
    icon: FileDescriptionIcon,
    keywords: ["file", "document", "description", "text", "paper"],
  },
  {
    name: "flame-icon",
    icon: FlameIcon,
    keywords: ["flame", "fire", "hot", "burn", "heat"],
  },
  {
    name: "filled-bell-icon",
    icon: FilledBellIcon,
    keywords: ["bell", "notification", "alert", "alarm"],
  },
  {
    name: "filled-checked-icon",
    icon: FilledCheckedIcon,
    keywords: ["check", "tick", "success", "filled", "done"],
  },
  {
    name: "gear-icon",
    icon: GearIcon,
    keywords: ["gear", "settings", "config", "options"],
  },
  {
    name: "ghost-icon",
    icon: GhostIcon,
    keywords: ["ghost", "spooky", "halloween", "spirit", "boo"],
  },
  {
    name: "github-icon",
    icon: GithubIcon,
    keywords: ["github", "git", "code", "repository", "social"],
  },
  {
    name: "github-copilot-icon",
    icon: GithubCopilotIcon,
    keywords: ["github", "copilot", "ai", "code", "assistant"],
  },
  {
    name: "gitlab-icon",
    icon: GitlabIcon,
    keywords: ["gitlab", "git", "code", "repository", "devops"],
  },
  {
    name: "heart-icon",
    icon: HeartIcon,
    keywords: ["heart", "love", "favorite", "like"],
  },
  {
    name: "history-circle-icon",
    icon: HistoryCircleIcon,
    keywords: ["history", "time", "clock", "past", "rewind"],
  },
  {
    name: "info-circle-icon",
    icon: InfoCircleIcon,
    keywords: ["info", "information", "circle", "help", "about"],
  },
  {
    name: "instagram-icon",
    icon: Instagram,
    keywords: ["instagram", "social", "media", "photo"],
  },
  {
    name: "like-icon",
    icon: LikeIcon,
    keywords: ["like", "heart", "love", "favorite"],
  },
  {
    name: "link-icon",
    icon: LinkIcon,
    keywords: ["link", "chain", "url", "hyperlink", "connect"],
  },
  {
    name: "lock-icon",
    icon: LockIcon,
    keywords: ["lock", "secure", "security", "password", "privacy"],
  },
  {
    name: "logout-icon",
    icon: LogoutIcon,
    keywords: ["logout", "exit", "signout", "leave"],
  },
  {
    name: "magnifier-icon",
    icon: MagnifierIcon,
    keywords: ["search", "find", "zoom", "look"],
  },
  {
    name: "mail-filled-icon",
    icon: MailFilledIcon,
    keywords: ["mail", "email", "message", "envelope", "inbox"],
  },
  {
    name: "message-circle-icon",
    icon: MessageCircleIcon,
    keywords: ["message", "chat", "bubble", "talk", "conversation"],
  },
  {
    name: "moon-icon",
    icon: MoonIcon,
    keywords: ["moon", "night", "dark", "sleep", "theme"],
  },
  {
    name: "pen-icon",
    icon: PenIcon,
    keywords: ["pen", "edit", "write", "modify"],
  },
  {
    name: "phone-volume",
    icon: PhoneVolume,
    keywords: ["phone", "call", "volume", "sound"],
  },
  {
    name: "player-icon",
    icon: PlayerIcon,
    keywords: ["play", "media", "music", "video"],
  },
  {
    name: "qrcode-icon",
    icon: QrCodeIcon,
    keywords: ["qr", "code", "scan", "barcode"],
  },
  {
    name: "question-mark",
    icon: QuestionMark,
    keywords: ["question", "help", "info", "faq"],
  },
  {
    name: "refresh-icon",
    icon: RefreshIcon,
    keywords: ["refresh", "reload", "sync", "update"],
  },
  {
    name: "right-cheveron",
    icon: RightCheveron,
    keywords: ["arrow", "right", "next", "forward"],
  },
  {
    name: "rocket-icon",
    icon: RocketIcon,
    keywords: ["rocket", "launch", "space", "startup"],
  },
  {
    name: "rosette-discount-icon",
    icon: RosetteDiscountIcon,
    keywords: [
      "rosette",
      "discount",
      "price",
      "tag",
      "sale",
      "offer",
      "percentage",
    ],
  },
  {
    name: "rosette-discount-check-icon",
    icon: RosetteDiscountCheckIcon,
    keywords: [
      "rosette",
      "discount",
      "check",
      "badge",
      "verified",
      "offer",
      "sale",
    ],
  },
  {
    name: "send-icon",
    icon: SendIcon,
    keywords: ["send", "message", "mail", "submit"],
  },
  {
    name: "shield-check",
    icon: ShieldCheck,
    keywords: ["shield", "security", "safe", "protect"],
  },
  {
    name: "shopping-cart-icon",
    icon: ShoppingCartIcon,
    keywords: ["cart", "shopping", "store", "buy"],
  },
  {
    name: "simple-checked-icon",
    icon: SimpleCheckedIcon,
    keywords: ["check", "tick", "simple", "done"],
  },
  {
    name: "skull-emoji",
    icon: SkullEmoji,
    keywords: ["skull", "death", "danger", "warning"],
  },
  {
    name: "sparkles-icon",
    icon: SparklesIcon,
    keywords: ["sparkles", "stars", "magic", "shine", "glitter", "ai", "new"],
  },
  {
    name: "telephone-icon",
    icon: TelephoneIcon,
    keywords: ["telephone", "call", "phone", "contact"],
  },
  {
    name: "text-icon",
    icon: TextIcon,
    keywords: ["text", "type", "font", "write"],
  },
  {
    name: "toggle-icon",
    icon: ToggleIcon,
    keywords: ["toggle", "switch", "on", "off"],
  },
  {
    name: "trash-icon",
    icon: TrashIcon,
    keywords: ["trash", "delete", "remove", "bin"],
    customProps: [
      { name: "shakeOnClick", type: "boolean", defaultValue: false },
      { name: "dangerHover", type: "boolean", defaultValue: false },
      { name: "keepOpenOnDelete", type: "boolean", defaultValue: false },
    ],
  },
  {
    name: "unordered-list-icon",
    icon: UnorderedListIcon,
    keywords: ["list", "unordered", "bullet", "items", "menu"],
  },
  {
    name: "user-check-icon",
    icon: UserCheckIcon,
    keywords: ["user", "check", "verified", "approved", "confirm", "accept"],
  },
  {
    name: "user-plus-icon",
    icon: UserPlusIcon,
    keywords: ["user", "plus", "add", "new", "invite", "create", "signup"],
  },
  {
    name: "users-icon",
    icon: UsersIcon,
    keywords: ["users", "people", "group", "team", "community", "multiple"],
  },
  {
    name: "users-group-icon",
    icon: UsersGroupIcon,
    keywords: [
      "users",
      "group",
      "people",
      "team",
      "community",
      "collaboration",
    ],
  },
  {
    name: "vinyl-icon",
    icon: VinylIcon,
    keywords: ["vinyl", "record", "music", "disc", "retro", "audio", "album"],
  },
  {
    name: "washing-machine-icon",
    icon: WashingMachineIcon,
    keywords: ["washing", "machine", "laundry", "clean", "appliance", "drum"],
  },
  {
    name: "globe-icon",
    icon: GlobeIcon,
    keywords: ["globe", "world", "earth", "planet"],
  },
  {
    name: "hashtag-icon",
    icon: HashtagIcon,
    keywords: [
      "hashtag",
      "hash",
      "tag",
      "number",
      "symbol",
      "social",
      "trending",
    ],
  },
  {
    name: "layers-icon",
    icon: LayersIcon,
    keywords: ["layers", "stack", "blocks", "overlap", "organize", "group"],
  },
  {
    name: "layout-bottombar-collapse-icon",
    icon: LayoutBottombarCollapseIcon,
    keywords: [
      "layout",
      "bottombar",
      "collapse",
      "bottom",
      "bar",
      "panel",
      "ui",
      "interface",
    ],
  },
  {
    name: "layout-sidebar-right-icon",
    icon: LayoutSidebarRightIcon,
    keywords: [
      "layout",
      "sidebar",
      "right",
      "panel",
      "ui",
      "interface",
      "navigation",
    ],
  },
  {
    name: "paint-icon",
    icon: PaintIcon,
    keywords: [
      "paint",
      "roller",
      "brush",
      "color",
      "design",
      "theme",
      "customize",
    ],
  },
  {
    name: "plug-connected-icon",
    icon: PlugConnectedIcon,
    keywords: [
      "plug",
      "connected",
      "connection",
      "cable",
      "power",
      "socket",
      "electric",
    ],
  },
  {
    name: "plug-connected-x-icon",
    icon: PlugConnectedXIcon,
    keywords: [
      "plug",
      "connected",
      "disconnect",
      "x",
      "connection",
      "cable",
      "power",
      "unplug",
    ],
  },
  {
    name: "stack-icon",
    icon: StackIcon,
    keywords: ["stack", "layers", "pile", "organize", "group", "data"],
  },
  {
    name: "stack-3-icon",
    icon: Stack3Icon,
    keywords: [
      "stack",
      "layers",
      "three",
      "multiple",
      "organize",
      "group",
      "levels",
    ],
  },
  {
    name: "whatsapp-icon",
    icon: WhatsappIcon,
    keywords: ["whatsapp", "chat", "message", "social"],
  },
  {
    name: "world-icon",
    icon: WorldIcon,
    keywords: ["world", "globe", "earth", "planet", "international", "global"],
  },
  {
    name: "keyframes-icon",
    icon: KeyframesIcon,
    keywords: ["keyframes", "animation", "motion", "video", "timeline"],
  },
  {
    name: "wifi-icon",
    icon: WifiIcon,
    keywords: ["wifi", "wireless", "internet", "network", "signal"],
  },
  {
    name: "wifi-off-icon",
    icon: WifiOffIcon,
    keywords: ["wifi", "off", "disconnected", "no signal", "network"],
  },
  {
    name: "terminal-icon",
    icon: TerminalIcon,
    keywords: ["terminal", "console", "command", "shell", "code"],
  },
  {
    name: "twitter-x-icon",
    icon: TwitterXIcon,
    keywords: ["twitter", "x", "social", "media", "post"],
  },
  {
    name: "x-icon",
    icon: XIcon,
    keywords: ["x", "close", "cancel", "exit", "dismiss", "remove"],
  },
  {
    name: "youtube-icon",
    icon: YoutubeIcon,
    keywords: ["youtube", "video", "play", "media", "social"],
  },
].sort((a, b) => a.name.localeCompare(b.name));

export { ICON_LIST };
