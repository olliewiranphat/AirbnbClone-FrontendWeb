import React from 'react'
import { CorrectIcon, WrongIcon } from '../IndexIcon'

function TableCheck() {
  return (
    <div>
        <h1 className='text-2xl font-bold mb-4'>Stayzy it with top‑to‑bottom protection</h1>
    {/* table */}
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th></th>
        <th>Stayzy</th>
        <th>Competitors</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th></th>
        <td>
            <p className='text-lg'>Guest identity verification</p>
            <p>Our comprehensive verification system checks details such as name, address, government ID and more to confirm the identity of guests who book on Airbnb</p>
        </td>
        <td ><CorrectIcon/></td>
        <td><CorrectIcon/></td>
      </tr>
      {/* row 2 */}
      <tr>
        <th></th>
        <td>
            <p className='text-lg'>Reservation screening</p>
            <p>Our proprietary technology analyzes hundreds of factors in each reservation and blocks certain bookings that show a high risk for disruptive parties and property damage.</p>
        </td>
        <td><CorrectIcon/></td>
        <td><WrongIcon/></td>
      </tr>
      {/* row 3 */}
      <tr>
        <th></th>
        <td>
            <p className='text-lg'>$3M damage protection</p>
            <p>Airbnb reimburses you for damage caused by guests to your home and belongings and includes these specialized protections:</p>
        </td>
        <td><CorrectIcon/></td>
        <td><WrongIcon/></td>
      </tr>
      {/* row 4 */}
      <tr>
        <th></th>
        <td>Art & valuables</td>
        <td><CorrectIcon/></td>
        <td><WrongIcon/></td>
      </tr>
      {/* row 5 */}
      <tr>
        <th></th>
        <td>Auto & boat</td>
        <td><CorrectIcon/></td>
        <td><WrongIcon/></td>
      </tr>
      {/* row 6 */}
      <tr>
        <th></th>
        <td>Pet damage</td>
        <td><CorrectIcon/></td>
        <td><WrongIcon/></td>
      </tr>
      {/* row 7 */}
      <tr>
        <th></th>
        <td>Income loss</td>
        <td><CorrectIcon/></td>
        <td><WrongIcon/></td>
      </tr>
      {/* row 8 */}
      <tr>
        <th></th>
        <td>Deep cleaning</td>
        <td><CorrectIcon/></td>
        <td><WrongIcon/></td>
      </tr>
      {/* row 9 */}
      <tr>
        <th></th>
        <td>
            <p>$1M liability insurance</p>
            <p>You’re protected in the rare event that a guest gets hurt or their belongings are damaged or stolen.</p>
        </td>
        <td><CorrectIcon/></td>
        <td><CorrectIcon/></td>
      </tr>
      {/* row 10 */}
      <tr>
        <th></th>
        <td>
            <p>24-hour safety line</p>
            <p>If you ever feel unsafe, our app provides one-tap access to specially-trained safety agents, day or night.</p>
        </td>
        <td><CorrectIcon/></td>
        <td><WrongIcon/></td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
  )
}

export default TableCheck