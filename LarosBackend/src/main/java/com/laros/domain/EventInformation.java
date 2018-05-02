package com.laros.domain;
// Generated 02-may-2018 20:18:06 by Hibernate Tools 4.3.5.Final

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * EventInformation generated by hbm2java
 */
@Entity
@Table(name = "event_information", catalog = "dblaros")
public class EventInformation implements java.io.Serializable {

	private int eventInformationId;
	private Event event;
	private String createdBy;
	private Date createdDate;
	private String descripcionEvento;
	private String instructorEvento;
	private String metodologiaEvento;
	private String participantesEvento;
	private String requisitosEvento;
	private String syllabusEvento;
	private String temasEvento;
	private String updatedBy;
	private Date updatedDate;
	private Integer rowVersion;

	public EventInformation() {
	}

	public EventInformation(int eventInformationId, Event event) {
		this.eventInformationId = eventInformationId;
		this.event = event;
	}

	public EventInformation(int eventInformationId, Event event, String createdBy, Date createdDate,
			String descripcionEvento, String instructorEvento, String metodologiaEvento, String participantesEvento,
			String requisitosEvento, String syllabusEvento, String temasEvento, String updatedBy, Date updatedDate,
			Integer rowVersion) {
		this.eventInformationId = eventInformationId;
		this.event = event;
		this.createdBy = createdBy;
		this.createdDate = createdDate;
		this.descripcionEvento = descripcionEvento;
		this.instructorEvento = instructorEvento;
		this.metodologiaEvento = metodologiaEvento;
		this.participantesEvento = participantesEvento;
		this.requisitosEvento = requisitosEvento;
		this.syllabusEvento = syllabusEvento;
		this.temasEvento = temasEvento;
		this.updatedBy = updatedBy;
		this.updatedDate = updatedDate;
		this.rowVersion = rowVersion;
	}

	@Id

	@Column(name = "event_information_id", unique = true, nullable = false)
	public int getEventInformationId() {
		return this.eventInformationId;
	}

	public void setEventInformationId(int eventInformationId) {
		this.eventInformationId = eventInformationId;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "event_id", nullable = false)
	public Event getEvent() {
		return this.event;
	}

	public void setEvent(Event event) {
		this.event = event;
	}

	@Column(name = "created_by")
	public String getCreatedBy() {
		return this.createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "created_date", length = 19)
	public Date getCreatedDate() {
		return this.createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	@Column(name = "descripcion_evento", length = 1000)
	public String getDescripcionEvento() {
		return this.descripcionEvento;
	}

	public void setDescripcionEvento(String descripcionEvento) {
		this.descripcionEvento = descripcionEvento;
	}

	@Column(name = "instructor_evento", length = 200)
	public String getInstructorEvento() {
		return this.instructorEvento;
	}

	public void setInstructorEvento(String instructorEvento) {
		this.instructorEvento = instructorEvento;
	}

	@Column(name = "metodologia_evento", length = 100)
	public String getMetodologiaEvento() {
		return this.metodologiaEvento;
	}

	public void setMetodologiaEvento(String metodologiaEvento) {
		this.metodologiaEvento = metodologiaEvento;
	}

	@Column(name = "participantes_evento", length = 20)
	public String getParticipantesEvento() {
		return this.participantesEvento;
	}

	public void setParticipantesEvento(String participantesEvento) {
		this.participantesEvento = participantesEvento;
	}

	@Column(name = "requisitos_evento", length = 600)
	public String getRequisitosEvento() {
		return this.requisitosEvento;
	}

	public void setRequisitosEvento(String requisitosEvento) {
		this.requisitosEvento = requisitosEvento;
	}

	@Column(name = "syllabus_evento", length = 200)
	public String getSyllabusEvento() {
		return this.syllabusEvento;
	}

	public void setSyllabusEvento(String syllabusEvento) {
		this.syllabusEvento = syllabusEvento;
	}

	@Column(name = "temas_evento", length = 2000)
	public String getTemasEvento() {
		return this.temasEvento;
	}

	public void setTemasEvento(String temasEvento) {
		this.temasEvento = temasEvento;
	}

	@Column(name = "updated_by")
	public String getUpdatedBy() {
		return this.updatedBy;
	}

	public void setUpdatedBy(String updatedBy) {
		this.updatedBy = updatedBy;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "updated_date", length = 19)
	public Date getUpdatedDate() {
		return this.updatedDate;
	}

	public void setUpdatedDate(Date updatedDate) {
		this.updatedDate = updatedDate;
	}

	@Column(name = "row_version")
	public Integer getRowVersion() {
		return this.rowVersion;
	}

	public void setRowVersion(Integer rowVersion) {
		this.rowVersion = rowVersion;
	}

}
