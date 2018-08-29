package com.springboot.practise;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class ContactController {


	@RequestMapping(value = "/contact", method = RequestMethod.GET)
	public List<Contact> getContacts() {

		List<Contact> Contactist = new ArrayList<Contact>();

		Contactist.add(new Contact(1, "Ashish", "Pune"));
		Contactist.add(new Contact(2, "Prasad", "Dehu"));
		Contactist.add(new Contact(3, "Pritam", "Baroda"));
		return Contactist;

	}

	@RequestMapping(value = "/contact/{id}")
	public Contact getContact(@PathVariable("id") int id) {
		Contact contact = new Contact(1, "Ashish", "Pune");
		return contact;
	}

	@RequestMapping(method = RequestMethod.POST, value = "/contact")
	public Contact save(@RequestBody Contact contact) {
		contact = new Contact(1, "Pravin", "Boston");
		return contact;
	}

	@RequestMapping(method = RequestMethod.PUT, value = "/contact/{id}")
	public Contact update(@PathVariable("id") int id, @RequestBody Contact contact) {
		contact = new Contact(1, "Abhijit", "keptown");
		return contact;
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/contact/{id}")
	public Contact delete(@PathVariable("id") int id) {
		Contact contact = new Contact(1, "Abhijit", "keptown");
		return contact;
	}

}
