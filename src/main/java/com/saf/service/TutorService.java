package com.saf.service;

import com.saf.service.dto.TutorDTO;
import java.util.List;

/**
 * Service Interface for managing Tutor.
 */
public interface TutorService {

    /**
     * Save a tutor.
     *
     * @param tutorDTO the entity to save
     * @return the persisted entity
     */
    TutorDTO save(TutorDTO tutorDTO);

    /**
     * Get all the tutors.
     *
     * @return the list of entities
     */
    List<TutorDTO> findAll();

    /**
     * Get the "id" tutor.
     *
     * @param id the id of the entity
     * @return the entity
     */
    TutorDTO findOne(Long id);

    /**
     * Delete the "id" tutor.
     *
     * @param id the id of the entity
     */
    void delete(Long id);
}
