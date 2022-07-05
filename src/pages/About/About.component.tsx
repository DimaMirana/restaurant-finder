import React, {FC} from 'react';

const AboutPage:FC = () => {
    return <div>
        <p>
            This project utilizes the navigation functionality of the google map. It uses google map to locate the user's current location. After current location is retrieved, the user will be able to see the nearby restaurant locations on the map. The retrieved restaurant are also shown on the card view, left to the map view. The users can seach from the avaiilavble restaurant based on parameters passed. At any point of time the user can see all the nearby location map by clickings on the locate all restaurant buttons. The users can also select any random restaurant by clickings select random restaurant button.
        </p>
    </div>;
}


export default AboutPage;