package com.Abhishek.Model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Sitedata {
	@Id
	
 private int id;
 private String name;
 private String histroy;
 private String architecture;
 private String intrestingfact;
 private String rememberings;
 private String vistnear;
 private String howtoreach;
 private String location;
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getHistroy() {
	return histroy;
}
public void setHistroy(String histroy) {
	this.histroy = histroy;
}
public String getArchitecture() {
	return architecture;
}
public void setArchitecture(String architecture) {
	this.architecture = architecture;
}
public String getIntrestingfact() {
	return intrestingfact;
}
public void setIntrestingfact(String intrestingfact) {
	this.intrestingfact = intrestingfact;
}
public String getRememberings() {
	return rememberings;
}
public void setRememberings(String rememberings) {
	this.rememberings = rememberings;
}
public String getVistnear() {
	return vistnear;
}
public void setVistnear(String vistnear) {
	this.vistnear = vistnear;
}
public String getHowtoreach() {
	return howtoreach;
}
public void setHowtoreach(String howtoreach) {
	this.howtoreach = howtoreach;
}
public String getLocation() {
	return location;
}
public void setLocation(String location) {
	this.location = location;
}
}
