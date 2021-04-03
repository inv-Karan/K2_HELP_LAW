import React from 'react'
import { string } from 'yup'

let students = [
    {
      name: 'karan',
      section: 'B',
      subjects: [
        { name: 'maths', mark: 90 },
        { name: 'physics', mark: 90 },
        { name: 'chemistry', mark: 90 }
      ]
    },
    {
      name: 'Yash',
      section: 'B',
      subjects: [
        { name: 'maths', mark: 85 },
        { name: 'physics', mark: 45 },
        { name: 'chemistry', mark: 65 }
      ]
    },
    {
      name: 'Manthan',
      section: 'B',
      subjects: [
        { name: 'maths', mark: 40 },
        { name: 'physics', mark: 85 },
        { name: 'chemistry', mark: 90 }
      ]
    },
    {
      name: 'Akash',
      section: 'A',
      subjects: [
        { name: 'maths', mark: 90 },
        { name: 'physics', mark: 69 },
        { name: 'chemistry', mark: 85 }
      ]
    },
    {
      name: 'Denish',
      section: 'C',
      subjects: [
        { name: 'maths', mark: 85 },
        { name: 'physics', mark: 46 },
        { name: 'chemistry', mark: 38 }
      ]
    },
    {
      name: 'Dhruv',
      section: 'A',
      subjects: [
        { name: 'maths', mark: 85 },
        { name: 'physics', mark: 90 },
        { name: 'chemistry', mark: 75 }
      ]
    },
    {
      name: 'Bhavya',
      section: 'B',
      subjects: [
        { name: 'maths', mark: 40 },
        { name: 'physics', mark: 96 },
        { name: 'chemistry', mark: 58 }
      ]
    },
    {
      name: 'Chintan',
      section: 'B',
      subjects: [
        { name: 'maths', mark: 36 },
        { name: 'physics', mark: 85 },
        { name: 'chemistry', mark: 90 }
      ]
    },
    {
      name: 'Viraj',
      section: 'C',
      subjects: [
        { name: 'maths', mark: 90 },
        { name: 'physics', mark: 90 },
        { name: 'chemistry', mark: 95 }
      ]
    }
   ]



	 let b = students.filter((a) => {
		 return a.name.includes('Y')
	 })

const sample = () => {

        return <>
          <div>
						<input type = 'text' value = 'abc'></input>
            {b.map(item => {
              return <li>{item.name}</li>
            })}
          </div>
				</>
}

export default sample;