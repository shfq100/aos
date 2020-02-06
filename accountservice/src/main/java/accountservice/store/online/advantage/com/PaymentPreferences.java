//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.2.7 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2020.01.27 at 01:25:26 AM MST 
//


package accountservice.store.online.advantage.com;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for anonymous complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType>
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="preference" maxOccurs="unbounded" form="qualified">
 *           &lt;complexType>
 *             &lt;complexContent>
 *               &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *                 &lt;sequence>
 *                   &lt;element name="paymentMethod" type="{http://www.w3.org/2001/XMLSchema}int" form="qualified"/>
 *                   &lt;element name="cardNumber" type="{http://www.w3.org/2001/XMLSchema}string" form="qualified"/>
 *                   &lt;element name="expirationDate" type="{http://www.w3.org/2001/XMLSchema}string" form="qualified"/>
 *                   &lt;element name="cvvNumber" type="{http://www.w3.org/2001/XMLSchema}string" form="qualified"/>
 *                   &lt;element name="safePayUsername" type="{http://www.w3.org/2001/XMLSchema}string" form="qualified"/>
 *                   &lt;element name="safePayPassword" type="{http://www.w3.org/2001/XMLSchema}string" form="qualified"/>
 *                   &lt;element name="customerName" type="{http://www.w3.org/2001/XMLSchema}string" form="qualified"/>
 *                   &lt;element name="preferenceId" type="{http://www.w3.org/2001/XMLSchema}long" form="qualified"/>
 *                 &lt;/sequence>
 *               &lt;/restriction>
 *             &lt;/complexContent>
 *           &lt;/complexType>
 *         &lt;/element>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "preference"
})
@XmlRootElement(name = "PaymentPreferences")
public class PaymentPreferences {

    @XmlElement(required = true)
    protected List<PaymentPreferences.Preference> preference;

    /**
     * Gets the value of the preference property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the preference property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getPreference().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link PaymentPreferences.Preference }
     * 
     * 
     */
    public List<PaymentPreferences.Preference> getPreference() {
        if (preference == null) {
            preference = new ArrayList<PaymentPreferences.Preference>();
        }
        return this.preference;
    }


    /**
     * <p>Java class for anonymous complex type.
     * 
     * <p>The following schema fragment specifies the expected content contained within this class.
     * 
     * <pre>
     * &lt;complexType>
     *   &lt;complexContent>
     *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
     *       &lt;sequence>
     *         &lt;element name="paymentMethod" type="{http://www.w3.org/2001/XMLSchema}int" form="qualified"/>
     *         &lt;element name="cardNumber" type="{http://www.w3.org/2001/XMLSchema}string" form="qualified"/>
     *         &lt;element name="expirationDate" type="{http://www.w3.org/2001/XMLSchema}string" form="qualified"/>
     *         &lt;element name="cvvNumber" type="{http://www.w3.org/2001/XMLSchema}string" form="qualified"/>
     *         &lt;element name="safePayUsername" type="{http://www.w3.org/2001/XMLSchema}string" form="qualified"/>
     *         &lt;element name="safePayPassword" type="{http://www.w3.org/2001/XMLSchema}string" form="qualified"/>
     *         &lt;element name="customerName" type="{http://www.w3.org/2001/XMLSchema}string" form="qualified"/>
     *         &lt;element name="preferenceId" type="{http://www.w3.org/2001/XMLSchema}long" form="qualified"/>
     *       &lt;/sequence>
     *     &lt;/restriction>
     *   &lt;/complexContent>
     * &lt;/complexType>
     * </pre>
     * 
     * 
     */
    @XmlAccessorType(XmlAccessType.FIELD)
    @XmlType(name = "", propOrder = {
        "paymentMethod",
        "cardNumber",
        "expirationDate",
        "cvvNumber",
        "safePayUsername",
        "safePayPassword",
        "customerName",
        "preferenceId"
    })
    public static class Preference {

        protected int paymentMethod;
        @XmlElement(required = true)
        protected String cardNumber;
        @XmlElement(required = true)
        protected String expirationDate;
        @XmlElement(required = true)
        protected String cvvNumber;
        @XmlElement(required = true)
        protected String safePayUsername;
        @XmlElement(required = true)
        protected String safePayPassword;
        @XmlElement(required = true)
        protected String customerName;
        protected long preferenceId;

        /**
         * Gets the value of the paymentMethod property.
         * 
         */
        public int getPaymentMethod() {
            return paymentMethod;
        }

        /**
         * Sets the value of the paymentMethod property.
         * 
         */
        public void setPaymentMethod(int value) {
            this.paymentMethod = value;
        }

        /**
         * Gets the value of the cardNumber property.
         * 
         * @return
         *     possible object is
         *     {@link String }
         *     
         */
        public String getCardNumber() {
            return cardNumber;
        }

        /**
         * Sets the value of the cardNumber property.
         * 
         * @param value
         *     allowed object is
         *     {@link String }
         *     
         */
        public void setCardNumber(String value) {
            this.cardNumber = value;
        }

        /**
         * Gets the value of the expirationDate property.
         * 
         * @return
         *     possible object is
         *     {@link String }
         *     
         */
        public String getExpirationDate() {
            return expirationDate;
        }

        /**
         * Sets the value of the expirationDate property.
         * 
         * @param value
         *     allowed object is
         *     {@link String }
         *     
         */
        public void setExpirationDate(String value) {
            this.expirationDate = value;
        }

        /**
         * Gets the value of the cvvNumber property.
         * 
         * @return
         *     possible object is
         *     {@link String }
         *     
         */
        public String getCvvNumber() {
            return cvvNumber;
        }

        /**
         * Sets the value of the cvvNumber property.
         * 
         * @param value
         *     allowed object is
         *     {@link String }
         *     
         */
        public void setCvvNumber(String value) {
            this.cvvNumber = value;
        }

        /**
         * Gets the value of the safePayUsername property.
         * 
         * @return
         *     possible object is
         *     {@link String }
         *     
         */
        public String getSafePayUsername() {
            return safePayUsername;
        }

        /**
         * Sets the value of the safePayUsername property.
         * 
         * @param value
         *     allowed object is
         *     {@link String }
         *     
         */
        public void setSafePayUsername(String value) {
            this.safePayUsername = value;
        }

        /**
         * Gets the value of the safePayPassword property.
         * 
         * @return
         *     possible object is
         *     {@link String }
         *     
         */
        public String getSafePayPassword() {
            return safePayPassword;
        }

        /**
         * Sets the value of the safePayPassword property.
         * 
         * @param value
         *     allowed object is
         *     {@link String }
         *     
         */
        public void setSafePayPassword(String value) {
            this.safePayPassword = value;
        }

        /**
         * Gets the value of the customerName property.
         * 
         * @return
         *     possible object is
         *     {@link String }
         *     
         */
        public String getCustomerName() {
            return customerName;
        }

        /**
         * Sets the value of the customerName property.
         * 
         * @param value
         *     allowed object is
         *     {@link String }
         *     
         */
        public void setCustomerName(String value) {
            this.customerName = value;
        }

        /**
         * Gets the value of the preferenceId property.
         * 
         */
        public long getPreferenceId() {
            return preferenceId;
        }

        /**
         * Sets the value of the preferenceId property.
         * 
         */
        public void setPreferenceId(long value) {
            this.preferenceId = value;
        }

    }

}
