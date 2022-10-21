import React from 'react';
import { BsGithub } from 'react-icons/bs';

const Header = () => {
    const logo = (
        <svg
            width="75pt"
            height="75pt"
            version="1.1"
            viewBox="70 100 600 600"
            xmlns="http://www.w3.org/2000/svg">
            <path d="m383.02 589.95c-8.5742-4.1094-21.754-8.8672-29.285-10.57-14.656-3.3164-52.422-21.57-71.332-34.477-36.016-24.578-63.98-76.32-83.91-155.27-5.168-20.473-6.207-28.777-6.1758-49.363 0.066406-43.59 8.5703-88.242 21.379-112.27 10.449-19.605 43.891-48.23 71.855-61.504 19.066-9.0508 34.352-11.297 76.504-11.227 39.844 0.066406 59.016 2.9414 82.668 12.398 9.1562 3.6602 26.754 8.4727 39.102 10.699 26.867 4.8359 38.27 9.4727 47.754 19.41 8.4375 8.8438 7.9727 15.234-0.86328 11.875-8.7188-3.3164-10.438-2.4297-5.4922 2.832 5.4219 5.7734 8.6992 16.008 8.6992 27.184 0 4.4062 1.0938 10.059 2.4336 12.559 1.3398 2.5 3.1602 12.5 4.0469 22.223 1.1836 12.98 2.7578 19.109 5.9375 23.086 10.129 12.676 11.484 17.242 11.566 38.949 0.0625 16.648-0.96875 24.195-5.0156 36.68-5.9375 18.32-6.8281 42.664-2.4062 65.949 3.1758 16.73 2.1133 62.441-1.7383 74.934-1.3203 4.2852-6.375 13.711-11.23 20.953-8.1758 12.191-10.383 13.945-29.789 23.66-11.527 5.7734-25.109 13.555-30.184 17.297-5.0703 3.7422-11.23 6.8047-13.684 6.8047s-11.348 3.3008-19.77 7.3359c-13.117 6.2852-17.465 7.3359-30.391 7.3359-12.977 0-17.262-1.043-30.672-7.4727zm47.742-4.7891c2.6328-0.75 5.9609-3.7227 7.3906-6.6016 2.2812-4.5938 4.3516-5.3906 16.762-6.4609 7.7891-0.67188 15.18-2.2383 16.426-3.4844 3.3203-3.3203 0.25-6.8203-5.9922-6.8203-2.9922 0-11.277-3.2656-18.414-7.2539-11.695-6.5391-13.66-8.6602-19.945-21.484-11.906-24.297-36.469-44.219-66.531-53.969-13.148-4.2617-12.637-8.5 0.80469-6.6602 11.82 1.6211 26.18 8.9805 43.684 22.398 7.7109 5.9102 14.312 10.43 14.668 10.039 0.35547-0.38672 1.7305-8.957 3.0547-19.039 1.3242-10.082 5.2031-27.41 8.6211-38.508 7.7969-25.328 8.5039-53.633 1.957-78.258-4.7734-17.949-4.0352-25.785 3.7969-40.449 2.9297-5.4805 4.7656-10.523 4.082-11.207s-6.0703-0.20703-11.969 1.0586c-13.027 2.793-50.203 2.9883-54.477 0.28516-5.6992-3.6055-0.11328-5.0391 18.312-4.7031 10.07 0.18359 23.496-0.69922 29.836-1.9609 14.129-2.8125 33.648-12.469 37.238-18.418 2.3867-3.957 2.0703-4.6289-3.1445-6.6406-21.824-8.4219-27.797-15.832-27.805-34.477-0.003906-16.828 9.5156-30.754 30.383-44.426 9.2188-6.043 17.059-11.883 17.426-12.98 1.0742-3.2266-13.535-4.9805-31.301-3.7656-15.965 1.0938-16.508 0.98047-16.508-3.4922 0-2.543 1.0508-5.6719 2.332-6.9531 8.1797-8.1797-13.887-13.402-62.18-14.715-42.621-1.1562-59.289 0.74219-66.906 7.6211-2.332 2.1055-7.2383 4.3906-10.898 5.0781-11.555 2.1641-24.82 9.6016-40.191 22.539-27.82 23.418-34.992 36.984-43.668 82.625-3.5938 18.906-5.2617 35.27-5.4414 53.445-0.23047 23.379 0.45312 28.801 6.3594 50.359 18.215 66.469 40.363 112.93 65.762 137.94 10.438 10.277 47.863 29.594 79.375 40.969 10.953 3.9531 26.043 10.102 33.535 13.668 10.832 5.1523 16.199 6.4375 26.199 6.2734 6.918-0.11328 14.73-0.82031 17.363-1.5703zm-69.852-40.93c-24.527-7.9336-26.301-8.8438-24.805-12.742 0.87109-2.2734 4.9062-1.0898 18.137 5.3086 9.3594 4.5273 19.66 8.2305 22.891 8.2305 3.8242 0 5.875 1.0977 5.875 3.1445 0 1.7305-0.23438 3.082-0.52344 3.0078-0.28906-0.074219-9.9961-3.1992-21.574-6.9453zm-79.555-45.32c-2.2578-3.6523 1.0898-6.7695 4.3555-4.0547 1.6133 1.3398 2.418 3.2734 1.7852 4.293-1.5273 2.4727-4.5391 2.3555-6.1406-0.24219zm-24.602-49.711c-3.4883-9.8203-4.9844-16.91-3.8125-18.082 1.8867-1.8867 3.8047 1.7461 12.836 24.301 3.7305 9.3164 3.7539 9.957 0.34766 9.9453-2.6367 0-5.2109-4.4453-9.375-16.164zm125.21-7.9805c-4.6094-2.8398-9.3281-5.5117-10.48-5.9375-1.1523-0.42188-1.4531-1.4648-0.67187-2.3086 1.3008-1.4023 20.582 10.395 20.582 12.59 0 1.4102-0.33984 1.2539-9.4336-4.3477zm-19.387-100.89c-3.6484-1.4727-3.2812-4.8984 0.52344-4.8984 1.7305 0 3.1445 1.4141 3.1445 3.1445s-0.23438 3.0703-0.52344 2.9766c-0.28906-0.089843-1.7031-0.64062-3.1445-1.2227zm-53.027-37.277c-9.9648-3.6719-31.348-15.84-35.988-20.477-2.0547-2.0547-5.6172-3.7344-7.9258-3.7344-5.8359 0-5.2383-2.9766 2.0977-10.48 4.1562-4.2539 6.2891-8.5625 6.2891-12.715 0-18.098 19.027-40.938 38.465-46.172 4.8398-1.3047 14.508-1.6133 23.66-0.75391 12.625 1.1836 16.918 2.5781 23.309 7.5742 21.863 17.09 25.699 56.07 7.3242 74.445-12.703 12.703-18.82 15.348-35.121 15.195-8.0703-0.078125-18.02-1.375-22.109-2.8789zm40.93-12.238c4.5859-2.5977 10.531-8.4766 13.207-13.066 4.1367-7.0898 4.707-10.316 3.7852-21.492-2.1953-26.664-13.293-36.801-40.273-36.801-17.453 0-26.168 4.3711-35.59 17.855-15.836 22.668-8.1445 47.812 16.566 54.16 4.8477 1.2461 9.7539 2.6094 10.91 3.0352 7.0469 2.5859 23.785 0.61719 31.398-3.6914zm-53.332-11.836c-3.1562-5.8945-2.6562-15.277 1.0938-20.629 2.4961-3.5625 5.3438-4.6602 12.109-4.6602 18.293 0 23.695 11.477 10.754 22.84-8.8867 7.8008-20.461 8.9844-23.957 2.4492zm-67.145-41.602c0-3.0117 22.816-23.512 26.172-23.512 1.5273 0 6.6797-3.2617 11.453-7.25 11.039-9.2227 53.453-23.168 64.281-21.137 6.4727 1.2148 10.777 4.4375 8.6992 6.5156-0.49609 0.49609-8.0977 2.7422-16.887 4.9922-22.102 5.6523-36.582 13.23-52.809 27.637-12.199 10.828-14.91 12.305-22.664 12.328-4.8438 0.015625-10.93 0.59766-13.523 1.293-2.625 0.70312-4.7148 0.32031-4.7148-0.86719zm277 311.71c12.184-6.3945 20.82-15.469 27.367-28.754 6.7266-13.652 6.9023-14.707 7.5938-45.867 0.56641-25.516-0.007812-34.324-2.875-44.07-5.1133-17.367-4.5312-30.391 2.3867-53.086 4.8906-16.039 6.0586-23.789 6.0625-40.133 0.003906-19.176-0.33594-20.738-6.3633-29.344-11.812-16.855-34.66-26.652-52.781-22.637-19.336 4.2812-44.949 46.602-44.949 74.27 0 5.1328 0.58984 10.281 1.3086 11.445 0.71875 1.1641 2.1875 9.8359 3.2656 19.273 2.4062 21.098 0.019531 39.762-8.4805 66.289-5.125 15.992-6.2227 22.992-6.2227 39.594 0 11.094 1.1445 23.98 2.5391 28.645 3.3594 11.207 14.012 21.531 26.289 25.473 11.379 3.6562 36.996 3.0234 44.863-1.1055zm-37.684-20.164c-11.285-5.5625-17.285-15.344-19.332-31.512-1.8633-14.727 0.38672-45.109 4.4609-60.332 1.2344-4.6094 2.9062-28.27 3.7188-52.574l1.4727-44.191 6.8164-13.844c10.914-22.168 23.512-29.645 41.703-24.746 12.625 3.3984 18.371 9.0898 23.906 23.672 7.6484 20.152 7.0391 41.539-1.8164 63.93-8.293 20.969-9.0938 39.789-2.6484 62.328 3.5742 12.496 3.8555 16.512 1.9805 28.289-2.9609 18.598-14.902 43.129-23.57 48.414-8.3672 5.1016-26.906 5.3867-36.695 0.5625zm30.645-9.4688c1.3828-1.3828 2.5156-3.1797 2.5156-3.9961 0-2.5039-19.148-8.1602-27.621-8.1602-6.5352 0-8.0117 0.75-8.0117 4.0742 0 2.2383 2.0977 5.543 4.6602 7.3359 5.5508 3.8906 24.809 4.3945 28.457 0.75zm-1.6758-23.684c0-7.6602-2.793-9.8125-5.0625-3.8984-1.5859 4.1367 0.37891 11.23 3.1094 11.23 1.0742 0 1.9531-3.3008 1.9531-7.3359zm-29.344-2.2852c0-5.7266-5.293-8.9805-8.8359-5.4375-1.625 1.625-1.2617 3.8008 1.2812 7.6797 4.1016 6.2617 7.5547 5.2344 7.5547-2.2461zm45.773 2.1875c3.5312-7.75 3.0547-9.332-2.8086-9.332-4.3555 0-5.2383 1-5.2383 5.9375 0 9.957 4.2422 11.746 8.0469 3.3945zm-30.055-3.0469c0-5.7461-4.668-8.125-6.5117-3.3203-1.7344 4.5195 0.67969 10.152 3.8906 9.082 1.4414-0.48047 2.6172-3.0742 2.6172-5.7617zm24.102-16.906c0-4.793-11.25-16.629-19.695-20.715-10.008-4.8438-22.695-5.6367-26.027-1.625-1.2188 1.4688-2.8711 7.6016-3.6719 13.625l-1.4531 10.949h25.422c16.609 0 25.422-0.77344 25.422-2.2344zm10.43-9.8164c-0.027344-3.1719-1.957-12.836-4.2852-21.484-5.2891-19.633-4.0469-34.555 4.707-56.59 3.4336-8.6445 6.4062-19.492 6.6055-24.102l0.35938-8.3828h-56.594l-1.6094 37.727c-0.88672 20.75-1.8281 40.531-2.0977 43.957-0.46875 6.0078-0.089844 6.2891 10.617 7.8555 14.668 2.1484 21.473 5.9141 31.16 17.242 4.4219 5.1719 8.7461 9.4336 9.6133 9.4727 0.86328 0.050782 1.5508-2.5234 1.5234-5.6953zm-38.844-121.89c0.64844-1.0469 0.40625-3.9844-0.53516-6.5273-1.6055-4.3359-1.9297-4.4062-5.2422-1.0898-1.9414 1.9414-3.5312 4.8789-3.5312 6.5273 0 3.2773 7.4219 4.1484 9.3125 1.0938zm17.543-4.7461c-0.82422-8.3359-4.3008-9.6758-7.8594-3.0273-3.2031 5.9844-1.5547 9.6797 4.3164 9.6797 3.4609 0 4.0859-1.1758 3.543-6.6523zm12.969 2.582c0-2.2383-0.84375-4.5898-1.875-5.2266-2.2539-1.3906-4.9219 4.6797-3.2461 7.3906 2.0664 3.3398 5.1211 2.0508 5.1211-2.1602zm14.984 0.92578c0-1.0938-1.0156-2.3281-2.2539-2.7422-1.2383-0.41406-2.2539 0.82031-2.2539 2.7422 0 1.9219 1.0156 3.1562 2.2539 2.7422 1.2383-0.41406 2.2539-1.6484 2.2539-2.7422zm-6.6016-19.941c0-5.2812-11.41-12.527-19.746-12.535-6.4023 0-13.789 5.0859-13.789 9.5117 0 1.5039 5.0234 3.4414 12.051 4.6445 19.297 3.3047 21.484 3.1406 21.484-1.6211zm10.48-49.398c0-4.8359-0.87891-7.2188-2.4688-6.6875-6.8711 2.2891-7.4883 14.199-0.73828 14.199 2.2852 0 3.2109-2.1641 3.2109-7.5117zm-22.605-2.1523c8.7188-4.5078 16.766-22.559 15.914-35.68-0.77344-11.902-3.7266-13.527-7.9766-4.3828-2.4414 5.2539-4.6406 6.9062-9.8594 7.4102-14.949 1.4453-19.84-8.25-9.5664-18.973 4.8008-5.0117 5.2266-6.2969 2.6211-7.9414-4.75-3.0039-18.07-2.3984-26.754 1.2148-8.8047 3.6641-24.441 18.004-28.922 26.52-6.5508 12.457-2.5742 29.492 8.0117 34.324 8.8047 4.0195 47.219 2.3281 56.531-2.4883z" />
        </svg>
    );

    return (
        <div className="d-flex justify-content-between bg-success ">
            <div className="d-flex align-items-center ">
                <span className="ms-3">{logo}</span>
                <h1 className="ms-3">Memerator</h1>
            </div>
            <a href="#" className="d-flex align-items-center pe-5 text-dark">
                <p className="h2 pe-3 pt-2">GitHub</p>
                <BsGithub size={'3rem'} />
            </a>
        </div>
    );
};

export default Header;
