import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { order } from '../../apis/orderApi';
import { cartStore, orderStore, paramStore, tokenStore, userStore } from '../../store/store';
import { cartType, orderType, paramType, tokenType, userType } from '../../types/types';
import { testMode } from '../../utils/testMode';
import { toastError, toastSuccess } from '../toast';
import styled from './Cart.module.scss'
import CartList from './CartList';

const Cart = () => {

  const [cartList, setCartList] = useRecoilState<cartType[]>(cartStore)
  const [orderList, setOrderList] = useRecoilState<orderType[]>(orderStore)
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [userInfo] = useRecoilState<userType>(userStore)
  const [paramsInfo] = useRecoilState<paramType>(paramStore)
  const [tokenInfo] = useRecoilState<tokenType>(tokenStore)

  // 계산하기 버튼 클릭 시 주문내역에 카트에 있는 아이템들과 총 결제금액 추가
  const handleClick = async () => {
    const cart = cartList.map((item) => {
      return { id: item.product.menuId, count: item.count }
    })
    if (!testMode) {
      const value = {
        memberId: userInfo.id,
        storeId: Number(paramsInfo.id),
        orderMenus: cart,
      }
      try {
        const result = await order(value, tokenInfo.token)
        if (result.status === 200) {
          toastSuccess('주문이 완료되었습니다.')
          setCartList([])
        }
      } catch (e: any) {
        toastError(e.response.data.message)
      }
    } else {
      const cart = cartList.map((item) => {
        return { name: item.product.menuName, count: item.count, price: item.product.price }
      })
      const item = {
        storeId: 1,
        storeName: '커피 참 잘하는 집',
        orderId: 1,
        orderDate: '2022-12-11',
        orderStatus: "INCOM",
        totalPrice: totalPrice,
        reviewStatus: "INCOM",
        menuList: cart,
      }
      setOrderList([...orderList, item])
      setCartList([])
    }
  }

  useEffect(() => {
    // 카트 리스트 안에 있는 아이템 총 합 계산
    if (cartList.length !== 0) {
      let price = cartList.map(item => (item.product.price * item.count))
      setTotalPrice(price.reduce((acc, cur) => acc + cur))
    } else {
      setTotalPrice(0)
    }
  }, [cartList])

  return (
    <div className={styled.cartContainer}>
      <div className={styled.orderCinfirmArea}>
        <div className={styled.titleArea}>
          <h1 className={styled.cartTitle}>
            주문 확인
          </h1>
        </div>
        <div className={styled.cartListArea}>
          {cartList.length === 0 ? <div className={styled.noCart}>주문하신 메뉴가 없습니다.</div> :
            <CartList cartList={cartList} setCartList={setCartList} />
          }
        </div>
        <div className={styled.totalPriceArea}>
          <p>총 금액 : {totalPrice.toLocaleString()}</p>
        </div>
        <div>
          <button className={cartList.length === 0 ? styled.emptyList : styled.paymentBtn} disabled={cartList.length === 0} onClick={handleClick}>결제하기</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;