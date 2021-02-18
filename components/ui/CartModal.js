import React, { Fragment } from "react";
import Link from "next/link";

class CartModal extends React.Component {
  constructor(props) {
    super(props);
  }

  closeCartModal = () => {
      const myBody = document.getElementById("myBody");
      myBody.classList.remove("offcanvas_right","lock-scroll");



      const myOverlay = document.getElementById("myOverlay");
      myOverlay.classList.remove("toggle_menu_overlay");


    /*const myCart = document.getElementById("myCart");
    myCart.style.visibility = "hidden";*/
  };

  render() {
    return (
      <Fragment>
        <div id="myCart" className="offcanvas_aside offcanvas_aside_right">
          <div className="offcanvas_aside_content">
            <div className="offcanvas_minicart">
              <div className="offcanvas_header">
                <div onClick={() => this.closeCartModal()} className="close-icon">
                  <span className="close-icon_top" />
                  <span className="close-icon_bottom" />
                </div>
              </div>
              <div className="widget woocommerce widget_shopping_cart">
                <h2 className="widgettitle">Sepet</h2>
                <div className="widget_shopping_cart_content">
                  <div className="shopping-cart-widget-body nano has-scrollbar">
                    <div
                      className="nano-content"
                      tabIndex={0}
                      style={{ right: "-19px" }}
                    >
                      <ul className="cart_list product_list_widget woocommerce-mini-cart ">
                        <li className="woocommerce-mini-cart-item mini_cart_item">
                          <div className="mini-cart-thumbnail">
                            <a
                              href="https://bafk.com.tr/sepet/?remove_item=ec46e459a1fef2c09a31bb17c7ea8f3f&_wpnonce=9b8d545f96"
                              className="remove remove_from_cart_button"
                              aria-label="Bu ürünü çıkar"
                              data-product_id={3986}
                              data-cart_item_key="ec46e459a1fef2c09a31bb17c7ea8f3f"
                              data-product_sku={8232532356}
                            >
                              ×
                            </a>
                            <a
                              href="https://bafk.com.tr/product/basis-zip-through-hooide-grey/?attribute_pa_beden=s"
                              className="cart-item-image"
                            >
                              <img
                                width={500}
                                height={700}
                                src="https://bafk.com.tr/wp-content/uploads/2020/09/gym-king-basis-tracksuit-grey-marl__48_2_2048x2048-500x700.jpg"
                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                alt=""
                              />{" "}
                            </a>
                          </div>
                          <div className="mini-cart-content">
                            <div className="mini-cart-title">
                              <a href="https://bafk.com.tr/product/basis-zip-through-hooide-grey/?attribute_pa_beden=s">
                                Basis Zip Through Hooide Grey - S{" "}
                              </a>
                              <div
                                className="product-quantity"
                                data-title="Miktar"
                              >
                                1{" "}
                                <input
                                  type="hidden"
                                  name="cart[ec46e459a1fef2c09a31bb17c7ea8f3f][qty]"
                                  defaultValue={1}
                                />
                              </div>
                            </div>
                            <span className="amount">
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  <span className="woocommerce-Price-currencySymbol">
                                    ₺
                                  </span>
                                  89<sup>,90</sup>
                                </bdi>
                              </span>
                            </span>{" "}
                          </div>
                        </li>
                        <li className="woocommerce-mini-cart-item mini_cart_item">
                          <div className="mini-cart-thumbnail">
                            <a
                              href="https://bafk.com.tr/sepet/?remove_item=ac8b7df7b6abc76954894551b549438a&_wpnonce=9b8d545f96"
                              className="remove remove_from_cart_button"
                              aria-label="Bu ürünü çıkar"
                              data-product_id={3967}
                              data-cart_item_key="ac8b7df7b6abc76954894551b549438a"
                              data-product_sku={8542255203}
                            >
                              ×
                            </a>
                            <a
                              href="https://bafk.com.tr/product/basis-zip-througr-hoodie/?attribute_pa_beden=l"
                              className="cart-item-image"
                            >
                              <img
                                width={500}
                                height={700}
                                src="https://bafk.com.tr/wp-content/uploads/2020/09/gym-king-basis-tracksuit-1black__40_2_2048x2048-500x700.jpg"
                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                alt=""
                              />{" "}
                            </a>
                          </div>
                          <div className="mini-cart-content">
                            <div className="mini-cart-title">
                              <a href="https://bafk.com.tr/product/basis-zip-througr-hoodie/?attribute_pa_beden=l">
                                Basis Zip Througr Hoodie Black - L{" "}
                              </a>
                              <div
                                className="product-quantity"
                                data-title="Miktar"
                              >
                                1{" "}
                                <input
                                  type="hidden"
                                  name="cart[ac8b7df7b6abc76954894551b549438a][qty]"
                                  defaultValue={1}
                                />
                              </div>
                            </div>
                            <span className="amount">
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  <span className="woocommerce-Price-currencySymbol">
                                    ₺
                                  </span>
                                  39<sup>,90</sup>
                                </bdi>
                              </span>
                            </span>{" "}
                          </div>
                        </li>
                        <li className="woocommerce-mini-cart-item mini_cart_item">
                          <div className="mini-cart-thumbnail">
                            <a
                              href="https://bafk.com.tr/sepet/?remove_item=bb45e9283a29a8971776bbf21387d422&_wpnonce=9b8d545f96"
                              className="remove remove_from_cart_button"
                              aria-label="Bu ürünü çıkar"
                              data-product_id={4002}
                              data-cart_item_key="bb45e9283a29a8971776bbf21387d422"
                              data-product_sku={8556310025}
                            >
                              ×
                            </a>
                            <a
                              href="https://bafk.com.tr/product/contrast-core-plus-poly-tracksuit-top-blue/?attribute_pa_beden=m"
                              className="cart-item-image"
                            >
                              <img
                                width={500}
                                height={700}
                                src="https://bafk.com.tr/wp-content/uploads/2020/09/COREPLUSPOLYTRACKSUIT-BLUEGREY_2042_2048x2048-500x700.jpg"
                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                alt=""
                              />{" "}
                            </a>
                          </div>
                          <div className="mini-cart-content">
                            <div className="mini-cart-title">
                              <a href="https://bafk.com.tr/product/contrast-core-plus-poly-tracksuit-top-blue/?attribute_pa_beden=m">
                                Contrast Core Plus Poly Tracksuit Top Blue - M{" "}
                              </a>
                              <div
                                className="product-quantity"
                                data-title="Miktar"
                              >
                                1{" "}
                                <input
                                  type="hidden"
                                  name="cart[bb45e9283a29a8971776bbf21387d422][qty]"
                                  defaultValue={1}
                                />
                              </div>
                            </div>
                            <span className="amount">
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  <span className="woocommerce-Price-currencySymbol">
                                    ₺
                                  </span>
                                  99<sup>,90</sup>
                                </bdi>
                              </span>
                            </span>{" "}
                          </div>
                        </li>
                        <li className="woocommerce-mini-cart-item mini_cart_item">
                          <div className="mini-cart-thumbnail">
                            <a
                              href="https://bafk.com.tr/sepet/?remove_item=4bd7f39d3d0c98d9c854d1ddb5a55487&_wpnonce=9b8d545f96"
                              className="remove remove_from_cart_button"
                              aria-label="Bu ürünü çıkar"
                              data-product_id={3986}
                              data-cart_item_key="4bd7f39d3d0c98d9c854d1ddb5a55487"
                              data-product_sku={8232532350}
                            >
                              ×
                            </a>
                            <a
                              href="https://bafk.com.tr/product/basis-zip-through-hooide-grey/?attribute_pa_beden=m"
                              className="cart-item-image"
                            >
                              <img
                                width={500}
                                height={700}
                                src="https://bafk.com.tr/wp-content/uploads/2020/09/gym-king-basis-tracksuit-grey-marl__48_2_2048x2048-500x700.jpg"
                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                alt=""
                              />{" "}
                            </a>
                          </div>
                          <div className="mini-cart-content">
                            <div className="mini-cart-title">
                              <a href="https://bafk.com.tr/product/basis-zip-through-hooide-grey/?attribute_pa_beden=m">
                                Basis Zip Through Hooide Grey - M{" "}
                              </a>
                              <div
                                className="product-quantity"
                                data-title="Miktar"
                              >
                                1{" "}
                                <input
                                  type="hidden"
                                  name="cart[4bd7f39d3d0c98d9c854d1ddb5a55487][qty]"
                                  defaultValue={1}
                                />
                              </div>
                            </div>
                            <span className="amount">
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  <span className="woocommerce-Price-currencySymbol">
                                    ₺
                                  </span>
                                  89<sup>,90</sup>
                                </bdi>
                              </span>
                            </span>{" "}
                          </div>
                        </li>
                        <li className="woocommerce-mini-cart-item mini_cart_item">
                          <div className="mini-cart-thumbnail">
                            <a
                              href="https://bafk.com.tr/sepet/?remove_item=77065a3dca8cfff7e00a6594534d6f4b&_wpnonce=9b8d545f96"
                              className="remove remove_from_cart_button"
                              aria-label="Bu ürünü çıkar"
                              data-product_id={4106}
                              data-cart_item_key="77065a3dca8cfff7e00a6594534d6f4b"
                              data-product_sku="8542100221-1-1-1"
                            >
                              ×
                            </a>
                            <a
                              href="https://bafk.com.tr/product/gri-yanlari-seritli-esofman-takimi/?attribute_pa_beden=m"
                              className="cart-item-image"
                            >
                              <img
                                width={500}
                                height={700}
                                src="https://bafk.com.tr/wp-content/uploads/2020/09/0003170_kadin-gri-yanlari-seritli-esofman-takimi-500x700.jpeg"
                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                alt=""
                              />{" "}
                            </a>
                          </div>
                          <div className="mini-cart-content">
                            <div className="mini-cart-title">
                              <a href="https://bafk.com.tr/product/gri-yanlari-seritli-esofman-takimi/?attribute_pa_beden=m">
                                BAFK Gri Yanları Şeritli Eşofman Takımı - M{" "}
                              </a>
                              <div
                                className="product-quantity"
                                data-title="Miktar"
                              >
                                1{" "}
                                <input
                                  type="hidden"
                                  name="cart[77065a3dca8cfff7e00a6594534d6f4b][qty]"
                                  defaultValue={1}
                                />
                              </div>
                            </div>
                            <span className="amount">
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  <span className="woocommerce-Price-currencySymbol">
                                    ₺
                                  </span>
                                  69<sup>,90</sup>
                                </bdi>
                              </span>
                            </span>{" "}
                          </div>
                        </li>
                      </ul>
                      {/* end product list */}
                    </div>
                    <div className="nano-pane">
                      <div
                        className="nano-slider"
                        style={{
                          height: "638px",
                          transform: "translate(0px, 0px)",
                        }}
                      />
                    </div>
                  </div>
                  <div className="shopping-cart-widget-footer">
                    <hr className="cart-horizontal-rule" />
                    <p className="woocommerce-mini-cart__total total">
                      <strong>Ara toplam:</strong>{" "}
                      <span className="amount">
                        <span className="woocommerce-Price-amount amount">
                          <bdi>
                            <span className="woocommerce-Price-currencySymbol">
                              ₺
                            </span>
                            389<sup>,50</sup>
                          </bdi>
                        </span>
                      </span>{" "}
                    </p>
                    <p className="woocommerce-mini-cart__buttons buttons">
                      <Link href="/cart">
                        <a className="button wc-forward cart-but">
                          <span>Sepeti görüntüle</span>
                        </a>
                      </Link>
                      <Link href="/">
                        <a className="button btn-blk checkout wc-forward">
                          <span>Ödeme</span>
                        </a>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CartModal;
