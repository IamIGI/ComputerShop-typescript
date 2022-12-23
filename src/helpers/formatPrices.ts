export default function formatPrices(price: number) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
