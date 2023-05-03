import { json } from 'co-body'

export async function status(ctx: Context, next: () => Promise<any>) {

  const body = await json(ctx.req)

    console.log("~ status ~ ctx.body:", body
    )

  await next()
}




  // ACCOUNT PAYLOAD:
  // {
  // IdSku: '10004623',
  // An: 'itglobers',
  // IdAffiliate: 'DSF',
  // ProductId: 1000006112,
  // DateModified: '2023-04-20T19:44:13.56578Z',
  // IsActive: true,
  // StockModified: true,
  // PriceModified: false,
  // HasStockKeepingUnitModified: false,
  // HasStockKeepingUnitRemovedFromAffiliate: false
  // }

  // SELLER PAYLOAD:
//  {
//   IdSku: '119',
//   An: 'obidev',
//   IdAffiliate: 'TGD',
//   ProductId: 94,
//   SellerChain: 'sbseller444',
//   DateModified: '2023-04-20T19:26:40.7597653Z',
//   IsActive: true,
//   StockModified: true,
//   PriceModified: false,
//   HasStockKeepingUnitModified: false,
//   HasStockKeepingUnitRemovedFromAffiliate: false
// }
