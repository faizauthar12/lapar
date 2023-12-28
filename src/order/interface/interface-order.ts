export interface OrderMenuEntityInterface {
  menu_id: number;
  price: number;
  quantity: number;
  total_price_menu: number;
}

export interface MenuItemCreateHTTPBodyInterface {
  menu_id: number;
  quantity: number;
}
