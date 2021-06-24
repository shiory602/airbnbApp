import styled from 'styled-components';

function TopFooter() {
    return (
        <>
        <Background class="container">
            <div class="row card-footer text-muted p-5">
                <div class="col">
                    <h5 class="card-title">ABOUT</h5>
                    <ul>
                        <li>How Airbnb works</li>
                        <li>Newsroom</li>
                        <li>For Work</li>
                        <li>Careers</li>
                        <li>Founders' Letter</li>
                    </ul>
                </div>
                <div class="col">
                    <h5 class="card-title">COMMUNITY</h5>
                    <ul>
                        <li>Accessibility</li>
                        <li>Guest Referrals</li>
                    </ul>
                </div>
                <div class="col">
                    <h5 class="card-title">HOST</h5>
                    <ul>
                        <li>Host your home</li>
                        <li>Host an Experience</li>
                        <li>Responsible hosting</li>
                        <li>Refer Hosts</li>
                    </ul>
                </div>
                <div class="col">
                    <h5 class="card-title">SUPPORT</h5>
                    <ul>
                        <li>Our COVID-19 Response</li>
                        <li>Cancellation options</li>
                        <li>Trust & Safety</li>
                    </ul>
                </div>
            </div>
        </Background>
        </>
    )
}

export default TopFooter;


const Background = styled.div`
background-color: #F7F7F7;
`