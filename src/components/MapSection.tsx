
export function MapSection() {
    return (
        <section className="w-full h-96 bg-gray-200 relative">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14130.852431711202!2d85.34002635!3d27.68005375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a165f02bc7%3A0x6e632839958066e!2sKoteshwor%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0%)' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover"
            ></iframe>

            {/* Map Overlay Pointer if needed */}
        </section>
    );
}
